# Assets: how images are stored and served

## The problem this solves

Images were originally externalized to the Lovable CDN. Each binary was replaced by a pointer
file, e.g. `src/assets/projects/<name>.webp.asset.json`:

```json
{
  "asset_id": "de13e925-…",
  "url": "/__l5e/assets-v1/de13e925-…/AI_Customer_Support_Triage_System.webp",
  "content_type": "image/webp"
}
```

Components import the pointer and use `.url`:

```ts
import shot from "@/assets/projects/AI_Customer_Support_Triage_System.webp.asset.json";
export const projectImages = { "ai-customer-support-triage": shot.url };
```

`/__l5e/assets-v1/…` is served by **Lovable's hosting infrastructure**. On Lovable preview and
Lovable publish it resolves. On **any other host — including Vercel — it 404s**, which is why
every workflow screenshot was blank after the first Vercel deployment.

## The fix in place

The binaries are committed to the repository under `public/`, mirroring the exact CDN path:

```
public/__l5e/assets-v1/<asset_id>/<filename>
```

Vite copies `public/` verbatim into `dist/`, so the same URL string now resolves on **both**
Lovable and Vercel. No component, import, or data file had to change.

Total footprint: ~1.6 MB (13 WebP workflow screenshots + profile PNG + client photo JPG).

## Adding a new workflow screenshot

1. Optimize the source image: resize to max 1280px wide and convert to WebP.
2. Upload it and write the pointer file:
   ```bash
   lovable-assets create --file /tmp/new-shot.webp --filename My_Project.webp \
     > src/assets/projects/My_Project.webp.asset.json
   ```
3. **Mirror it into `public/`** so non-Lovable hosts can serve it:
   ```bash
   lovable-assets get --file src/assets/projects/My_Project.webp.asset.json \
     --output "public/$(python3 -c "import json;print(json.load(open('src/assets/projects/My_Project.webp.asset.json'))['url'].lstrip('/'))")"
   ```
   (Create the parent directory first: the path is `public/__l5e/assets-v1/<asset_id>/`.)
4. Register it in `src/data/projectImages.ts`, keyed by the project's `slug`.

Step 3 is mandatory. Skipping it reproduces the blank-image bug on Vercel.

## Re-syncing every asset at once

If pointers change or images go missing on a non-Lovable host, regenerate the whole mirror:

```bash
python3 - <<'EOF'
import json, glob, os, subprocess
for f in glob.glob("src/assets/**/*.asset.json", recursive=True):
    d = json.load(open(f))
    out = os.path.join("public", d["url"].lstrip("/"))
    os.makedirs(os.path.dirname(out), exist_ok=True)
    subprocess.run(["lovable-assets", "get", "--file", f, "--output", out, "--overwrite"], check=True)
    print(out)
EOF
```

## Notes

- `.gitignore` does not exclude `public/`, so these files **are tracked in Git** and ship to GitHub → Vercel.
- Asset URLs are immutable (UUID per upload), so browser and CDN caching is safe and aggressive.
- Do not delete an asset with `lovable-assets delete` while the mirrored copy is still referenced —
  remove both, and remove the `projectImages.ts` entry.
- Loose `.png`/`.webp` files still sitting in `src/assets/` are legacy originals imported directly
  by Vite where used; they are hashed into the bundle and are unaffected by this mechanism.
