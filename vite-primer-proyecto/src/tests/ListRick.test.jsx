import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import ListRick from '../components/ListRick';

test('renderiza correctamente la lista de rick', async () => {
    render(<ListRick name="alien" />);

    // como el componente se renderiza de forma asincrona, se debe esperar a que se renderice
    // se debe usar el await screen.find... ya que el screen.get... sirve solo para elementos estáticos	
    //const liElementsGet = screen.getAllByRole('listitem');
    //expect(liElementsGet.length).toBe(0);

    const liElements = await screen.findAllByRole('listitem');
    expect(liElements.length).toBe(12);
    
});
