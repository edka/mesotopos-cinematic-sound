import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

const VIRTUAL_PREFIX = "\0lovable-asset:";

/**
 * Lovable exports `.asset.json` pointers to `/__l5e/...` cloud URLs.
 * When the real file exists beside the JSON, bundle it instead.
 */
export function lovableLocalAssets(): Plugin {
  return {
    name: "lovable-local-assets",
    enforce: "pre",
    async resolveId(source, importer) {
      if (source.startsWith(VIRTUAL_PREFIX)) return source;
      if (!source.endsWith(".asset.json")) return;

      const resolved = await this.resolve(source, importer, { skipSelf: true });
      if (!resolved) return;

      return VIRTUAL_PREFIX + resolved.id.replace(/\.json$/, "");
    },
    load(id) {
      if (!id.startsWith(VIRTUAL_PREFIX)) return;

      const assetJsonPath = id.slice(VIRTUAL_PREFIX.length) + ".json";
      const meta = JSON.parse(fs.readFileSync(assetJsonPath, "utf8")) as {
        original_filename?: string;
        url?: string;
      };

      if (!meta.original_filename) {
        return `export default ${JSON.stringify(meta)}`;
      }

      const localFile = path.join(path.dirname(assetJsonPath), meta.original_filename);
      if (!fs.existsSync(localFile)) {
        this.warn(
          `Missing ${meta.original_filename} in src/assets/ — image will be broken outside Lovable.`,
        );
        return `export default ${JSON.stringify(meta)}`;
      }

      const importPath = `${path.resolve(localFile)}?url`;
      return `import assetUrl from ${JSON.stringify(importPath)};
const meta = ${JSON.stringify(meta)};
export default { ...meta, url: assetUrl };`;
    },
  };
}
