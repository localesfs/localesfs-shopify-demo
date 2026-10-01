/**
 * Same mapping as @localesfs/shopify.
 * https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister
 */

export function resourceKey(gid, fieldKey) {
  const match = /^gid:\/\/shopify\/([^/]+)\/(\d+)$/.exec(gid);
  if (!match) return `shopify.resource.${fieldKey}`;
  return `shopify.${match[1].toLowerCase()}.${match[2]}.${fieldKey}`;
}

export function collectFromResource(node) {
  const entries = [];
  for (const field of node.translatableContent || []) {
    if (typeof field.value !== "string" || field.value === "") continue;
    entries.push({
      key: resourceKey(node.resourceId, field.key),
      text: field.value,
      context: `${node.resourceId} ${field.key}`,
    });
  }
  return entries;
}

export function translationsForLocale(node, localeMap, locale) {
  const translations = [];
  for (const field of node.translatableContent || []) {
    const key = resourceKey(node.resourceId, field.key);
    const value = localeMap[key];
    if (typeof value !== "string" || value === "") continue;
    translations.push({
      key: field.key,
      value,
      locale,
      translatableContentDigest: field.digest,
    });
  }
  return translations;
}
