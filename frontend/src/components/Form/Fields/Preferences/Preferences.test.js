import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Preferences from './Preferences';

describe('Preferences', () => {
  it('Renderiza o título e as preferências', () => {
    const { getByRole, getByLabelText } = render(
      <Preferences preferences={['Preferência A', 'Preferência B']} onPreferenceChange={() => {}} />
    );

    expect(getByRole('heading', { name: /preferências:/i })).toBeInTheDocument();
    expect(getByLabelText('Preferência A')).toBeInTheDocument();
    expect(getByLabelText('Preferência B')).toBeInTheDocument();
  });

  it('Marca e desmarca a preferência corretamente', async () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <Preferences preferences={['Preferência A']} onPreferenceChange={handleChange} />
    );

    const checkbox = getByLabelText('Preferência A');
    
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(['Preferência A']);

    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it('Renderiza preferências pré-selecionadas', () => {
    const { getByLabelText } = render(
      <Preferences
        preferences={['Preferência A']}
        selectedPreferences={['Preferência A']}
        onPreferenceChange={() => {}}
      />
    );

    expect(getByLabelText('Preferência A')).toBeChecked();
  });
});
