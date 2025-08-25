import { productMatchesFilters, calculateRelevanceScore } from '../index';

describe('rules', () => {
  describe('productMatchesFilters', () => {
    it('retorna true se houver match em preferências', () => {
      const product = { preferences: ['CRM'], features: [] };
      const result = productMatchesFilters(product, ['crm'], []);
      expect(result).toBe(true);
    });

    it('retorna true se houver match em funcionalidades', () => {
      const product = { preferences: [], features: ['Marketing'] };
      const result = productMatchesFilters(product, [], ['marketing']);
      expect(result).toBe(true);
    });

    it('retorna false se não houver match', () => {
      const product = { preferences: ['CRM'], features: ['Marketing'] };
      const result = productMatchesFilters(product, ['Suporte'], ['Financeiro']);
      expect(result).toBe(false);
    });

    it('retorna true se ambos baterem', () => {
      const product = { preferences: ['CRM'], features: ['Marketing'] };
      const result = productMatchesFilters(product, ['crm'], ['marketing']);
      expect(result).toBe(true);
    });
  });

  describe('calculateRelevanceScore', () => {
    it('soma matches entre preferências e funcionalidades', () => {
      const product = {
        preferences: ['CRM', 'Marketing'],
        features: ['IA', 'Conversas'],
      };

      const score = calculateRelevanceScore(product, ['crm', 'marketing'], ['ia']);
      expect(score).toBe(3);
    });

    it('retorna 0 se não houver nenhuma correspondência', () => {
      const product = {
        preferences: ['CRM'],
        features: ['IA'],
      };

      const score = calculateRelevanceScore(product, ['x'], ['y']);
      expect(score).toBe(0);
    });
  });
});
