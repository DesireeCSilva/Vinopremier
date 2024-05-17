import { render, screen } from '@testing-library/react';
import LogoutButton from '../components/LogoutButton/LogoutButton.jsx';
import { UserProvider } from '../context/UserContext.jsx';
import { MemoryRouter } from 'react-router-dom';

test("renders LogoutButton component", () => {
    render(
        <MemoryRouter>
        <UserProvider>
            <LogoutButton />
        </UserProvider>
        </MemoryRouter>
    );
    const titleElement = screen.getByText(/CERRAR SESIÓN/i);
    expect(titleElement).toBeInTheDocument();
});
