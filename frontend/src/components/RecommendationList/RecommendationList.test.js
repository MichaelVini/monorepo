// RecommendationList.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import RecommendationList from './RecommendationList';

describe('RecommendationList', () => {
  it('renderiza a lista de recomendações', () => {
    const { getByRole, getByText } = render(
      <RecommendationList recommendations={[{ name: 'Product 1', url: '#' }]} />
    );

    expect(getByRole('list')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
  });

  it('Mostra mensagem quando não há recomendações', () => {
    const { getByText } = render(<RecommendationList recommendations={[]} />);
    expect(getByText(/nenhuma recomendação encontrada/i)).toBeInTheDocument();
  });

  it('Renderiza links com o href correto', () => {
    const { getByRole } = render(
      <RecommendationList
        recommendations={[{ name: 'Product 1', url: 'https://example.com' }]}
      />
    );

    const link = getByRole('link', { name: 'Product 1' });
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
