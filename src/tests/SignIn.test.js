import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../components/SignIn/SignIn';

describe('<SignIn>', () => {
  it('should render correctly', () => {
    const component = shallow(<SignIn />);

    expect(component).toMatchSnapshot();
  });
});
