import { render, screen } from '@testing-library/react';
import Title from '../components/Title';
import { test, expect } from 'vitest';

test('Title renderiza correctamente', async () => {

    //Renderizar el componente
    render(<Title title="Hola" />);

    //Buscar el elemento en el DOM
    const titleElements = screen.getAllByText('Hola');
    //Buscamos el elemento h1
    const h1Element = screen.getByRole('heading', { level: 1 });
    const h1Promise = await screen.findByRole('heading', { level: 1 });

    expect(h1Promise).toBeInTheDocument();
    //Verificar que el contenido del elemento h1 es el esperado
    expect(h1Element.textContent).toBe('Hola');
    //Esperar que el elemento esté en el documento
    expect(titleElements.length).toBe(2);

}); 