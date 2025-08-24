export function normalizeStrings(list = []) {
  return list.map(value => String(value).trim().toLowerCase());
}