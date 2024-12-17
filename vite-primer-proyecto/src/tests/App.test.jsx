import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { test, expect, describe } from 'vitest';

describe('App', () => {
    
    test('renderiza correctamente el h1', () => {
        render(<App />);
        const h1Element = screen.getByRole('heading', { level: 1 });
        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toHaveTextContent('Hola HAB');
    });

    test('renderiza correctamente el h2', () => {
        render(<App />);
        const h2Element = screen.getByRole('heading', { level: 2 });
        expect(h2Element).toBeInTheDocument();
        expect(h2Element.textContent.endsWith('.')).toBe(true);
    });

    test('verifica que el boton aumenta el contador', async () => {
        render(<App />);
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        await userEvent.click(buttonElement);
        await userEvent.click(buttonElement);
        const pElement = await screen.findByText('El valor del contador es: 3');
        expect(pElement).toBeInTheDocument();
    });


    test('renderiza correctamente la lista de rick', async () => {
        render(<App />);

        const inputElement = screen.getByTestId('name');
        //limpiamos el input antes de escribir
        await userEvent.clear(inputElement);
        await userEvent.type(inputElement, 'al');

        const h3Element = screen.getByRole('heading', { level: 3 });
        expect(h3Element.textContent).toBe('al');    
    
        await new Promise(resolve => setTimeout(resolve, 4000));
         
        const liElements = await screen.findAllByRole('listitem');
        expect(liElements[0].textContent).toBe('Alan Rails');
    });
    
});

