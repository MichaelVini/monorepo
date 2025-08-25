import React from 'react';
import { render } from '@testing-library/react';
import SubmitButton from './SubmitButton';

describe('<SubmitButton />', () => {
  it('Renderiza com o texto fornecido', () => {
    const { getByRole } = render(<SubmitButton text="Enviar" />);
    expect(getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('Está habilitado por padrão', () => {
    const { getByRole } = render(<SubmitButton text="Enviar" />);
    expect(getByRole('button', { name: /enviar/i })).not.toBeDisabled();
  });

  it('Fica desabilitado quando a prop disabled é true', () => {
    const { getByRole } = render(<SubmitButton text="Enviar" disabled />);
    expect(getByRole('button', { name: /enviar/i })).toBeDisabled();
  });
});
