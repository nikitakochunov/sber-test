export type TOption = {
    value: string;
    label: string;
};

export type TOnChange = (target: TOption) => void;

export type SelectFieldProps = {
    options: TOption[];
    name: string;
    value: string;
    defaultOption?: string;
    onChange: TOnChange;
};
