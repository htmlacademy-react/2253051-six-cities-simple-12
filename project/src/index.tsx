import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { nearPlaceCards } from './components/mocks/mocks';
import { store } from './store';
import { checkAuthAction, fetchHotelsAction } from 'store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchHotelsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App nearPlaceCards={nearPlaceCards} />
    </Provider>
  </React.StrictMode>,
);
