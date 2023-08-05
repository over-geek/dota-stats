import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import HeroDetail from '../Pages/HeroDetail';

test('renders HeroDetail component', () => {
  const heroTest = render(
    <Provider store={store}>
      <Router>
        <HeroDetail />
      </Router>
    </Provider>,
  );
  expect(heroTest).toMatchSnapshot();
});
