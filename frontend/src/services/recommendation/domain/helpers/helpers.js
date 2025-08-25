import { normalizeStrings } from '../../../../utils/stringHelpers';

export function countMatches(productItems = [], selectedItems = []) {
  if (selectedItems.length === 0) return 0;
  const normalizedProductItems = normalizeStrings(productItems);
  const normalizedSelectedItems = normalizeStrings(selectedItems);
  return normalizedSelectedItems.filter(item => normalizedProductItems.includes(item)).length;
}

export function hasAtLeastOneMatch(productItems = [], selectedItems = []) {
  if (selectedItems.length === 0) return true;
  return countMatches(productItems, selectedItems) > 0;
}
