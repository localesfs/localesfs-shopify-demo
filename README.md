# localesfs-shopify-demo

Shows how a Shopify translatable product becomes LocalesFS keys, and the `translationsRegister` input for French, including `translatableContentDigest`.

```bash
node demo.mjs
```

Keys look like `shopify.product.{id}.{field}`.

A live sync needs a custom app token with `read_translations` and `write_translations`:

```bash
export SHOPIFY_SHOP=your-store.myshopify.com
export SHOPIFY_ADMIN_TOKEN=shpat_...
export LOCALESFS_URL=https://localesfs.com
export LOCALESFS_TOKEN=lfs_...
export LOCALESFS_PROJECT_ID=...
export LOCALESFS_SOURCE_LANG=en
npx @localesfs/shopify push
npx @localesfs/shopify pull
```
