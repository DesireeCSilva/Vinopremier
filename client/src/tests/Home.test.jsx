import { render, screen } from '@testing-library/react';
import Home from '../pages/Home/Home.jsx';

test("renders Home component", () => {
    render(<Home />);
    const titleElement = screen.getByText(/LAS MEJORES CATAS DE VINOPREMIER/i);
    expect(titleElement).toBeInTheDocument();
})