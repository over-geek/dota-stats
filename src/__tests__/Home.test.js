import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import Home from '../Pages/Home';

test('renders Home component', () => {
  const homeTest = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  expect(homeTest).toMatchSnapshot();
});
