import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonCount from '../components/ButtonCount';
import { test, expect } from 'vitest';

test('ButtonCount renderiza correctamente', async () => {
    render(<ButtonCount />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    userEvent.click(buttonElement);
    userEvent.click(buttonElement);
    userEvent.click(buttonElement);

    // getBy... es una función sincrónica, por lo que no se puede usar en este caso, debemos usar findBy...
   // const pElementGet = screen.getByText('Contador: 3');
   // expect(pElementGet).toBeInTheDocument();

    const pElement = await screen.findByText('Contador: 3');
    expect(pElement).toBeInTheDocument();



});