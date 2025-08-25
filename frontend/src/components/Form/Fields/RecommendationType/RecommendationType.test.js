import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecommendationType from './RecommendationType';

describe('RecommendationType' , () => {
  it('Renderiza o título e os radios de tipo de recomendação', () => {
    const { getByRole } = render(<RecommendationType onRecommendationTypeChange={() => {}} />);

    expect(
      getByRole('heading', { name: /tipo de recomendação:/i })
    ).toBeInTheDocument();

    expect(getByRole('radio', { name: /produto único/i })).toBeInTheDocument();
    expect(getByRole('radio', { name: /múltiplos produtos/i })).toBeInTheDocument();
  });

  it('Chama onRecommendationTypeChange com "SingleProduct"', async () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<RecommendationType onRecommendationTypeChange={handleChange} />);

    await userEvent.click(getByRole('radio', { name: /produto único/i }));
    expect(handleChange).toHaveBeenCalledWith('SingleProduct');
  });

  it('Chama onRecommendationTypeChange com "MultipleProducts"', async () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<RecommendationType onRecommendationTypeChange={handleChange} />);

    await userEvent.click(getByRole('radio', { name: /múltiplos produtos/i }));
    expect(handleChange).toHaveBeenCalledWith('MultipleProducts');
  });
});
