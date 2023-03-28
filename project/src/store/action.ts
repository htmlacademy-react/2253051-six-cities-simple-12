// действие что нужно сделать
import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity',
  (city: string) => ({
    payload: city,
  }));
