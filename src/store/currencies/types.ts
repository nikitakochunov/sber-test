import type { LOADING_STATUS, RESOLVED_STATUS, REJECTED_STATUS } from 'src/store/constants';

export type CurrencyDataResponse = {
    data: CurrencyData[];
};

export type CurrencyData = {
    id: string;
    name: string;
    min_size: string;
};

export type StatusKeys = typeof LOADING_STATUS | typeof RESOLVED_STATUS | typeof REJECTED_STATUS;

export type CurrencyState = {
    entities: CurrencyData[];
    currentValue: CurrencyData | null;
    status: StatusKeys | null;
    error: string | null;
};
