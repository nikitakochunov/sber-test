/* eslint-disable import/no-default-export */
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currencies/slice';

const store = configureStore({
    reducer: {
        currencies: currencyReducer
    }
});

export default store;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
