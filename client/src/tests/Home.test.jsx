import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';

test("renders Home component", () => {
    render(
        <Router>
            <Home />
        </Router>
    );
    // const titleElement = screen.getByText(/LAS MEJORES CATAS DE VINOPREMIER/i);
    // expect(titleElement).toBeInTheDocument();
})