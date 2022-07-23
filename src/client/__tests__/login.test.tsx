import { render, screen } from '@testing-library/react'
import Login from '../pages/login'
import '@testing-library/jest-dom'

describe('Login', () => {
    it('render a Loginpage', () => {
        render(<Login />);

        const result = screen.getByText(/Login/);

        expect(result).toBeInTheDocument()

    })
})