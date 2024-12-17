import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import CountMsg from '../components/CountMsg';

test('renderiza correctamente el mensaje del contador', () => {
    render(<CountMsg count="pepe" />);
    const pElement = screen.getByText('El valor del contador es: pepe');
    expect(pElement).toBeInTheDocument();
});

