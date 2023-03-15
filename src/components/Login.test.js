import { render, screen } from '@testing-library/react'
import Login from './Login'

test("username input should be rendered", () => {
    render(<Login />)

    const userInputElement = screen.getByPlaceholderText("username")
    expect(userInputElement).toBeInTheDocument()

})

test("password input should be rendered", () => {
    render(<Login />)

    const passwordInputElement = screen.getByPlaceholderText("pass")
    expect(passwordInputElement).toBeInTheDocument()
})

test("login button shold be rendered", () => {
    render(<Login />)

    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument()
})

test("username field shoul be empty", () => {
    render(<Login />)

    const userInputElement = screen.getByPlaceholderText("username")
    expect(userInputElement.value).toBe("")
})