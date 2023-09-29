import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import View from '../View';

test('renders View component', () => {
  render(
    <Provider store={store}>
      <View />
    </Provider>
  );
})