// Form.test.jsx
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { Features, Preferences, RecommendationType } from './Fields';

HTMLElement.prototype.scrollIntoView = jest.fn();

const renderForm = (props = {}) =>
  render(
    <Form
      {...props}
      preferences={['Preferência A']}
      features={['Funcionalidade A']}
    />
  );

describe('Formulário', () => {
  it('Mostra erro se submeter sem preferência/funcionalidade', async () => {
    const { getByRole, getByText } = renderForm();

    await userEvent.click(getByRole('button', { name: /obter recomendação/i }));
    await waitFor(() => {
      expect(getByText('Selecione ao menos uma preferência ou funcionalidade')).toBeInTheDocument();
    });
  });

  it('Limpa o erro ao selecionar uma preferência', async () => {
    const { getByRole, getByLabelText, queryByText } = renderForm();

    await userEvent.click(getByRole('button', { name: /obter recomendação/i }));
    await waitFor(() => {
      expect(queryByText('Selecione ao menos uma preferência ou funcionalidade')).toBeInTheDocument();
    });
    await userEvent.click(getByLabelText('Preferência A'));
    await waitFor(() => {
      expect(queryByText('Selecione ao menos uma preferência ou funcionalidade')).toBeNull();
    });
  });

  it('Mostra erro se faltar o tipo de recomendação', async () => {
    const { getByRole, getByLabelText, getByText } = renderForm();

    await userEvent.click(getByLabelText('Preferência A'));
    await userEvent.click(getByRole('button', { name: /obter recomendação/i }));
    await waitFor(() => {
      expect(getByText('Selecione o tipo de recomendação')).toBeInTheDocument();
    });
  });

  it('Chama onSubmit com valores válidos', async () => {
    const onSubmit = jest.fn();
  
    const { getByRole, getByLabelText } = renderForm({
      onSubmit,
      preferences: ['Preferência A'],
      features: ['Funcionalidade A'],
    });
  
    await userEvent.click(getByLabelText('Preferência A'));
    await userEvent.click(getByRole('radio', { name: /produto único/i }));
    await userEvent.click(getByRole('button', { name: /obter recomendação/i }));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        selectedPreferences: ['Preferência A'],
        selectedFeatures: [],
        selectedRecommendationType: 'SingleProduct',
      });
    });
  });
  
});
