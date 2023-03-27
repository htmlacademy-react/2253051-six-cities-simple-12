import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reviews, nearPlaceCards } from './components/mocks/mocks';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} nearPlaceCards={nearPlaceCards} />
    </Provider>
  </React.StrictMode>,
);
