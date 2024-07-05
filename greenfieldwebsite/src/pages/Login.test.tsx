import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAuth0, Auth0ContextInterface } from '@auth0/auth0-react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

jest.mock('@auth0/auth0-react');

const mockedUseAuth0 = useAuth0 as jest.MockedFunction<typeof useAuth0>;

describe('Login Component', () => {
    beforeEach(() => {
        const mockAuth0Context: Auth0ContextInterface<any> = {
            isAuthenticated: false,
            loginWithRedirect: jest.fn(),
            logout: jest.fn(),
            user: null,
            isLoading: false,
            error: undefined,
            getAccessTokenSilently: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithPopup: jest.fn(),
            handleRedirectCallback: jest.fn(),
        };

        mockedUseAuth0.mockReturnValue(mockAuth0Context);
    });

    test('renders Login button when not authenticated', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const loginButton = screen.getByRole('button', { name: /sign in/i });
        expect(loginButton).toBeInTheDocument();
    });

    test('renders Logout button when authenticated', () => {
        mockedUseAuth0.mockReturnValue({
            ...mockedUseAuth0(),
            isAuthenticated: true,
        });

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const logoutButton = screen.getByRole('button', { name: /log out/i });
        expect(logoutButton).toBeInTheDocument();
    });

    test('calls loginWithRedirect when Sign In button is clicked', () => {
        const loginWithRedirect = jest.fn();
        mockedUseAuth0.mockReturnValue({
            ...mockedUseAuth0(),
            loginWithRedirect,
        });

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const signInButton = screen.getByRole('button', { name: /sign in/i });
        fireEvent.click(signInButton);

        expect(loginWithRedirect).toHaveBeenCalledTimes(1);
    });

    test('calls logout when Log Out button is clicked', () => {
        const logout = jest.fn();
        mockedUseAuth0.mockReturnValue({
            ...mockedUseAuth0(),
            isAuthenticated: true,
            logout,
        });

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const logoutButton = screen.getByRole('button', { name: /log out/i });
        fireEvent.click(logoutButton);

        expect(logout).toHaveBeenCalledTimes(1);
    });
});
