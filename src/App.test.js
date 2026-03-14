// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PayloadCmsAdmin title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PayloadCmsAdmin/i);
    expect(titleElement).toBeInTheDocument();
});
