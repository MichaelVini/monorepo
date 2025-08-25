// Header.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('Renderiza o título e o parágrafo de descrição', () => {
    const { getByRole, getByText } = render(<Header />);

    expect(
      getByRole('heading', {
        name: /recomendador de produtos rd station/i,
        level: 1,
      })
    ).toBeInTheDocument();

    expect(
      getByText(/bem-vindo ao recomendador de produtos rd station/i)
    ).toBeInTheDocument();
  });
});
