import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { useAuth0 } from '@auth0/auth0-react';
import ActionButton from './ActionButton';

jest.mock('@auth0/auth0-react');

const mockedUseAuth0 = useAuth0 as jest.MockedFunction<typeof useAuth0>;

describe('ActionButton Component', () => {
    beforeEach(() => {
        (mockedUseAuth0 as jest.Mock).mockReturnValue({
            isAuthenticated: false,
            loginWithRedirect: jest.fn(),
            logout: jest.fn(),
            user: null,
        });
    });

    it('renders login button when actionType is "login"', () => {
        render(<ActionButton actionType="login" onSubmitContactForm={() => {}} />);

        const loginButton = screen.getByRole('button', { name: 'Log In' });
        expect(loginButton).toBeInTheDocument();
    });

    it('renders contact us button when actionType is "contact"', () => {
        render(<ActionButton actionType="contact" onSubmitContactForm={() => {}} />);

        const contactButton = screen.getByRole('button', { name: 'Contact Us' });
        expect(contactButton).toBeInTheDocument();
    });

    it('opens contact form dialog when "Contact Us" button is clicked', () => {
        render(<ActionButton actionType="contact" onSubmitContactForm={() => {}} />);

        const contactButton = screen.getByRole('button', { name: 'Contact Us' });
        fireEvent.click(contactButton);

        const dialogTitle = screen.getAllByText('Contact Us')[1]; // Get the second occurrence
        expect(dialogTitle).toBeInTheDocument();
    });
});