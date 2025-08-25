import { countMatches, hasAtLeastOneMatch } from '../helpers/helpers';

export function productMatchesFilters(product, selectedPreferences = [], selectedFeatures = []) {
  const preferencesOk = hasAtLeastOneMatch(product.preferences, selectedPreferences);
  const featuresOk = hasAtLeastOneMatch(product.features, selectedFeatures);
  return preferencesOk || featuresOk;
}

export function calculateRelevanceScore(product, selectedPreferences = [], selectedFeatures = []) {
  return (
    countMatches(product.preferences, selectedPreferences) +
    countMatches(product.features, selectedFeatures)
  );
}
