import type {
    LOADING_STATUS,
    RESOLVED_STATUS,
    REJECTED_STATUS
} from 'src/store/constants';

export type TCurrencyDataResponse = {
    data: TCurrencyData[];
};

export type TCurrencyData = {
    id: string;
    name: string;
    min_size: string;
};

export type TStatusKeys =
    | typeof LOADING_STATUS
    | typeof RESOLVED_STATUS
    | typeof REJECTED_STATUS;

export type TCurrencyState = {
    entities: TCurrencyData[];
    currentValue: TCurrencyData | null;
    status: TStatusKeys | null;
    error: string | null;
};
