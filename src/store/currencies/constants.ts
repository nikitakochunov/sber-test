import type { CurrencyState } from './types';

export const initialState: CurrencyState = {
    entities: [],
    currentValue: null,
    status: null,
    error: null
};

export const CURRENCIES_URL = 'https://api.coinbase.com/v2/currencies';
