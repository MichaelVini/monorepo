import { calculateRelevanceScore } from './rules';

/*
  Critérios de ordenação e desempate.
*/

function isScoreTie(scoreA, scoreB) {
  return scoreA === scoreB;
}

function resolveTieByIndexDesc(a, b) {
  return b.index - a.index;
}

export function sortByScoreDescendingLastWins(itemsWithIndex, selectedPreferences, selectedFeatures) {
  return [...itemsWithIndex].sort((a, b) => {
    const scoreA = calculateRelevanceScore(a.product, selectedPreferences, selectedFeatures);
    const scoreB = calculateRelevanceScore(b.product, selectedPreferences, selectedFeatures);

    if (isScoreTie(scoreA, scoreB)) {
      return resolveTieByIndexDesc(a, b);
    }
    return scoreB - scoreA;
  });
}
