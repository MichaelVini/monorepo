import recommendationService from './recommendation.service';
import mockProducts from '../../mocks/mockProducts';

describe('recommendationService', () => {
  it('Retorna recomendação correta para SingleProduct com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  it('Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product) => product.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
    ]);
  });

  it('Retorna apenas um produto para SingleProduct com mais de um produto de match', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station Marketing');
  });

  it('Retorna o último match em caso de empate para SingleProduct', () => {
    const formData = {
      selectedPreferences: ['Automação de marketing', 'Integração com chatbots'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  it('Retorna recomendações apenas com features selecionadas (sem preferências)', () => {
    const formData = {
      selectedPreferences: [],
      selectedFeatures: ['Gestão de leads e oportunidades', 'Análise de dados para insights estratégicos'],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations.length).toBeGreaterThan(0);
    expect(recommendations.map(product => product.name)).toContain('RD Station CRM');
    expect(recommendations.map(product => product.name)).toContain('RD Mentor AI');
  });

  it('Retorna recomendações apenas com preferências selecionadas (sem features)', () => {
    const formData = {
      selectedPreferences: ['Análise preditiva de dados', 'Personalização de funis de vendas'],
      selectedFeatures: [],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations.length).toBeGreaterThan(0);
    expect(recommendations.map(product => product.name)).toContain('RD Station CRM');
    expect(recommendations.map(product => product.name)).toContain('RD Mentor AI');
  });

  it('Ignora diferenças de capitalização e espaços em branco extras nas comparações', () => {
    const formData = {
      selectedPreferences: ['INTEGRAÇÃO fácil COM ferramentas de e-mail  '],
      selectedFeatures: ['gestão de leads e oportunidades'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station CRM');
  });

  it('Em empate de relevância, retorna o último produto para MultipleProducts', () => {
    const formData = {
      selectedPreferences: [
        'Personalização de funis de vendas', 
        'Automação de marketing',
        'Integração com chatbots',
        'Análise preditiva de dados'
      ],
      selectedFeatures: [],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(4);
    expect(recommendations[0].name).toBe('RD Mentor AI');
    expect(recommendations[3].name).toBe('RD Station CRM');
  });

  it('Funciona com arrays vazios de preferências e features nos produtos', () => {
    const productsSemPrefs = [
      ...mockProducts,
      {
        id: 5,
        name: 'Produto Vazio',
        category: 'ite',
        preferences: [],
        features: []
      }
    ];

    const formData = {
      selectedPreferences: ['Integração fácil com ferramentas de e-mail'],
      selectedFeatures: ['Gestão de leads e oportunidades'],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      productsSemPrefs
    );

    expect(recommendations.length).toBeGreaterThan(0);
    expect(recommendations.map(product => product.name)).toContain('RD Station CRM');
    expect(recommendations.map(product => product.name)).not.toContain('Produto Vazio');
  });
});
