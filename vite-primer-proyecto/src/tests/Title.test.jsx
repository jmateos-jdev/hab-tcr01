import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from '../components/Title';
import { test, expect } from 'vitest';

test('Title renderiza correctamente', () => {
    render(<Title title="Test Title" />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
}); 