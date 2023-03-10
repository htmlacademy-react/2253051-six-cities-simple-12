import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cards, reviews } from './components/mocks/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cards={cards} reviews={reviews}/>
  </React.StrictMode>,
);
