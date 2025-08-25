import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecommendationSection from './RecommendationSection';

describe('RecommendationSection', () => {
  it('renderiza as recomendações na tela', () => {
    const { getByText } = render(
      <RecommendationSection
        recommendations={[{ name: 'Produto Teste', url: '#' }]}
        onReset={() => {}}
      />
    );

    expect(getByText('Produto Teste')).toBeInTheDocument();
  });

  it('chama onReset ao clicar no botão Voltar', async () => {
    const onReset = jest.fn();

    const { getByRole } = render(
      <RecommendationSection
        recommendations={[]}
        onReset={onReset}
      />
    );

    await userEvent.click(getByRole('button', { name: /voltar/i }));
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
