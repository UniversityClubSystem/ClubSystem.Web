import React from 'react';

import { render } from 'react-testing-library';

import SignIn from '../components/SignIn/SignIn';

it('should render correctly', () => {
  const { getByText } = render(<SignIn />);
  expect(getByText('Login')).toBeInTheDocument();
});
