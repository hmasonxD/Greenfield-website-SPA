import React from 'react';
import { render, screen } from '@testing-library/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import theme from './components/Theme';

jest.mock('@auth0/auth0-react', () => ({
    useAuth0: () => ({
        isAuthenticated: false,
        loginWithRedirect: jest.fn(),
        logout: jest.fn(),
        user: null,
        isLoading: false,
    }),
}));

function renderWithProviders(ui: React.ReactElement) {
    return render(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                {ui}
            </Router>
        </ThemeProvider>
    );
}

test('renders all main components in App', () => {
    renderWithProviders(<App />);
    // Add assertions here to check for main components
    // For example:
    // expect(screen.getByTestId('header')).toBeInTheDocument();
    // expect(screen.getByTestId('footer')).toBeInTheDocument();
});