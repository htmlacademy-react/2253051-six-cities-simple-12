import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reviews, nearPlaceCards } from './components/mocks/mocks';
import { store } from './store';
import { checkAuthAction, fetchHotelsAction } from 'store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchHotelsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App reviews={reviews} nearPlaceCards={nearPlaceCards} />
    </Provider>
  </React.StrictMode>,
);
