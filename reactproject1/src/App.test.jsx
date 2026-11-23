import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'; // <--- Добавили импорт
import App from './App';

test('renders the Get started heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /get started/i });
    expect(heading).toBeInTheDocument();
});