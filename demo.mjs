import { readFile } from "node:fs/promises";
import { collectFromResource, translationsForLocale } from "./sync.mjs";

const product = JSON.parse(await readFile(new URL("./resource.json", import.meta.url), "utf8"));
console.log("Shopify push:");
console.log(JSON.stringify(collectFromResource(product), null, 2));

const localeMap = {
  "shopify.product.1001.title": "Cabas en toile",
  "shopify.product.1001.body_html": "<p>Un exemple de vitrine.</p>",
};
console.log("\ntranslationsRegister input for fr:");
console.log(JSON.stringify(translationsForLocale(product, localeMap, "fr"), null, 2));
