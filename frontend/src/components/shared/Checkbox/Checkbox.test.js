// Checkbox.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renderiza o componente com o texto do label', () => {
    const { getByLabelText } = render(<Checkbox>Test Checkbox</Checkbox>);
    expect(getByLabelText('Test Checkbox')).toBeInTheDocument();
  });

  it('chama onChange ao ser clicado', async () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox onChange={handleChange}>Test Checkbox</Checkbox>
    );
    await userEvent.click(getByLabelText('Test Checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
