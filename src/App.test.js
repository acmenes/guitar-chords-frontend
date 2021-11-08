import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home';
import UserProfile from './profiles/UserProfile';
import LogIn from './userforms/LogIn';
import SignUp from './userforms/SignUp';

test('renders home link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders signup link', () => {
  render(<SignUp />);
  const linkElement = screen.getByText(/signup/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders login link', () => {
  render(<LogIn />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders profile link', () => {
  render(<UserProfile />);
  const linkElement = screen.getByText(/profile/i);
  expect(linkElement).toBeInTheDocument();
});