import { RECOMMENDATION_TYPE } from '../../constants/recomendationTypes';
import { productMatchesFilters } from './domain';
import { sortByScoreDescendingLastWins } from './domain';

export function getRecommendations(formData, products = []) {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } = formData;

  const itemsWithIndex = products.map((product, index) => ({ product, index }));

  const candidateProducts = itemsWithIndex.filter(({ product }) =>
    productMatchesFilters(product, selectedPreferences, selectedFeatures)
  );

  const sortedItems = sortByScoreDescendingLastWins(
    candidateProducts,
    selectedPreferences,
    selectedFeatures
  );

  if (sortedItems.length === 0) return [];

  if (selectedRecommendationType === RECOMMENDATION_TYPE.SINGLE_PRODUCT) {
    return [sortedItems[0].product];
  }

  return sortedItems.map(item => item.product);
}

const recommendationService = { getRecommendations };

export default recommendationService;
