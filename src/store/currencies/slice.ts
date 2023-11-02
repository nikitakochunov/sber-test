/* eslint-disable import/no-default-export */
import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
    type AnyAction
} from '@reduxjs/toolkit';

import {
    LOADING_STATUS,
    REJECTED_STATUS,
    RESOLVED_STATUS
} from 'src/store/constants';

import type { TCurrencyDataResponse } from './types';
import { CURRENCIES_URL, initialState } from './constants';

export const fetchCurrenciesList = createAsyncThunk<
    TCurrencyDataResponse,
    undefined,
    { rejectValue: string }
>('currencies/fetchCurrenciesList', async (_, { rejectWithValue }) => {
    const response = await fetch(CURRENCIES_URL);

    if (!response.ok) {
        rejectWithValue('Error!');
    }

    const data = await response.json();
    return data;
});

const currencySlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        setCurrentValue(state, action: PayloadAction<{ id: string }>) {
            const currentValue = state.entities.find(
                (ent) => ent.id === action.payload.id
            );
            if (currentValue) {
                state.currentValue = currentValue;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrenciesList.pending, (state) => {
                state.status = LOADING_STATUS;
                state.error = null;
            })
            .addCase(
                fetchCurrenciesList.fulfilled,
                (state, action: PayloadAction<TCurrencyDataResponse>) => {
                    state.status = RESOLVED_STATUS;
                    state.error = null;
                    state.entities = action.payload.data;
                }
            )
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.status = REJECTED_STATUS;
            });
    }
});

export const { setCurrentValue } = currencySlice.actions;

export default currencySlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith(REJECTED_STATUS);
}
