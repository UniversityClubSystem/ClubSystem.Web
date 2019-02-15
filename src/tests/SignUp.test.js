import React from 'react';

import { render } from 'react-testing-library';
import SignUp from '../components/SignUp/SignUp';

it('should render correctly', () => {
  const { getByText } = render(<SignUp />);
  expect(getByText('Username')).toBeInTheDocument();
});
