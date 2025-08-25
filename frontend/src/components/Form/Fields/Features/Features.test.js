import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Features from './Features';

describe('Features', () => {
  it('Renderiza o título e as funcionalidades', () => {
    const { getByRole, getByLabelText } = render(
      <Features features={['Funcionalidade A', 'Funcionalidade B']} onFeatureChange={() => {}} />
    );

    expect(getByRole('heading', { name: /funcionalidades:/i })).toBeInTheDocument();
    expect(getByLabelText('Funcionalidade A')).toBeInTheDocument();
    expect(getByLabelText('Funcionalidade B')).toBeInTheDocument();
  });

  it('Marca e desmarca a funcionalidade corretamente', async () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <Features features={['Funcionalidade A']} onFeatureChange={handleChange} />
    );

    const checkbox = getByLabelText('Funcionalidade A');
    
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(['Funcionalidade A']);
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it('Renderiza funcionalidades pré-selecionadas', () => {
    const { getByLabelText } = render(
      <Features
        features={['Funcionalidade A']}
        selectedFeatures={['Funcionalidade A']}
        onFeatureChange={() => {}}
      />
    );

    expect(getByLabelText('Funcionalidade A')).toBeChecked();
  });
});
