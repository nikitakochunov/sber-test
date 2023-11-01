export type OptionType = {
    value: string;
    label: string;
};

export type SelectFieldProps = {
    options: OptionType[];
    name: string;
    value: string;
    defaultOption?: string;
    onChange: (target: { name: string; value: string }) => void;
};
