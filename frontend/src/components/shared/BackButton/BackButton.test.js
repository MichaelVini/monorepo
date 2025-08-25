import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BackButton from './BackButton';

describe('BackButton', () => {
  it('Renderiza o componente BackButton', () => {
    const { getByRole } = render(<BackButton />);
    expect(getByRole('button', { name: /voltar/i })).toBeInTheDocument();
  });

  it('chama onClick ao ser clicado', async () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<BackButton onClick={handleClick} />);
    await userEvent.click(getByRole('button', { name: /voltar/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
