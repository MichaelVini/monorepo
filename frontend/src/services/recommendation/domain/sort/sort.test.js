import { sortByScoreDescendingLastWins } from './sort';

describe('sortByScoreDescendingLastWins', () => {
  const selectedPreferences = ['crm'];
  const selectedFeatures = ['marketing'];

  it('ordena produtos por score de forma decrescente', () => {
    const items = [
      { index: 0, product: { preferences: ['CRM'], features: [] } },
      { index: 1, product: { preferences: ['CRM'], features: ['Marketing'] } },
      { index: 2, product: { preferences: [], features: [] } },
    ];

    const sorted = sortByScoreDescendingLastWins(items, selectedPreferences, selectedFeatures);

    expect(sorted.map(i => i.index)).toEqual([1, 0, 2]);
  });

  it('em caso de empate de score, prioriza o índice mais recente (último)', () => {
    const items = [
      { index: 0, product: { preferences: ['CRM'] } },
      { index: 1, product: { preferences: ['crm'] } },
    ];

    const sorted = sortByScoreDescendingLastWins(items, selectedPreferences, selectedFeatures);

    expect(sorted.map(i => i.index)).toEqual([1, 0]);
  });

  it('retorna array vazio se entrada for vazia', () => {
    const result = sortByScoreDescendingLastWins([], selectedPreferences, selectedFeatures);
    expect(result).toEqual([]);
  });

  it('não altera o array original', () => {
    const original = [
      { index: 0, product: { preferences: ['CRM'] } },
      { index: 1, product: { preferences: ['crm'] } },
    ];
    const clone = [...original];

    sortByScoreDescendingLastWins(original, selectedPreferences, selectedFeatures);

    expect(original).toEqual(clone);
  });
});
