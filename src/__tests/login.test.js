import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import Login from "../pages/Login";
import {BrowserRouter} from "react-router-dom";

test('should render a login component', () => {
  render(
    <BrowserRouter>
        <Login/>
    </BrowserRouter>
  );
  const loginElement = screen.getByTestId('login-1');
  expect(loginElement).toBeInTheDocument();
  expect(loginElement).toHaveTextContent('Email address')
});


test('should navigate to the dashboard page', () => {
  const testClick = jest.fn();
  render(
    <BrowserRouter>
      <Login click={testClick}/>
    </BrowserRouter>
  );
  const submitButton = screen.getByTestId('submit-btn');
  fireEvent.click(submitButton);
  setTimeout(() => expect(window.location.pathname).toBe('/dashboard'), 4000);
});

