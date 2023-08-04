import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import NotFound from '../Pages/NotFound';

test('renders NotFound component', () => {
  const notFoundTest = render(
    <Provider store={store}>
      <Router>
        <NotFound />
      </Router>
    </Provider>,
  );
  expect(notFoundTest).toMatchSnapshot();
});
