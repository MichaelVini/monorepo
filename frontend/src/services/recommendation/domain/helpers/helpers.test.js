import { countMatches, hasAtLeastOneMatch } from './helpers';

describe('helpers', () => {
  describe('countMatches', () => {
    it('retorna 0 se selectedItems estiver vazio', () => {
      expect(countMatches(['A', 'B', 'C'], [])).toBe(0);
    });

    it('conta corretamente as correspondências normalizadas', () => {
      expect(countMatches(['CRM', 'Marketing'], ['crm'])).toBe(1);
      expect(countMatches(['crm', 'MARKETING'], ['CRM', 'marketing'])).toBe(2);
    });

    it('retorna 0 se não houver correspondências', () => {
      expect(countMatches(['A', 'B'], ['C'])).toBe(0);
    });

    it('retorna 0 se productItems estiver vazio', () => {
      expect(countMatches([], ['A'])).toBe(0);
    });
  });

  describe('hasAtLeastOneMatch', () => {
    it('retorna true se selectedItems estiver vazio', () => {
      expect(hasAtLeastOneMatch(['A', 'B'], [])).toBe(true);
    });

    it('retorna true se houver ao menos uma correspondência', () => {
      expect(hasAtLeastOneMatch(['A', 'B'], ['b'])).toBe(true);
    });

    it('retorna false se não houver nenhuma correspondência', () => {
      expect(hasAtLeastOneMatch(['A'], ['C'])).toBe(false);
    });
  });
});
