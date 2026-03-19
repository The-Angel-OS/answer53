# Photos — Answer 53

Drop personal photographs here. They'll be served at `answer53.vercel.app/photos/<filename>`.

## Naming Convention

Use descriptive kebab-case names with year when available:

```
rma-yearbook-1990.jpg
rma-class-photo-1990.jpg
navy-submarine-uss-name.jpg
navy-graduation.jpg
birth-certificate-000888.jpg
st-alfreds-commissioning-2026.jpg
clearwater-beach.jpg
stufflebeam-family.jpg
clay-sampson.jpg
tareq-salahi-homecoming.jpg
nolan-smith-alabama.jpg
```

## Supported Formats
- `.jpg` / `.jpeg` — photos (preferred, smaller file size)
- `.png` — screenshots, documents with transparency
- `.webp` — modern format, best compression

## Usage in the Site
Reference in markdown or components:
```md
![Description](/photos/rma-yearbook-1990.jpg)
```

Next.js will optimize these automatically via `<Image>` component.
