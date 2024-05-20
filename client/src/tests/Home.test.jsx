import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from '../context/UserContext.jsx';
import Card from '../components/card/card.jsx';

test("renders Home components", () => {
    render(
    <UserProvider>
        <Router>
            <Card />
        </Router>
    </UserProvider>
    );
    const titleElement = screen.getByText(/CATAS Y EVENTOS DE VINOPREMIER/i);
    expect(titleElement).toBeInTheDocument();
})