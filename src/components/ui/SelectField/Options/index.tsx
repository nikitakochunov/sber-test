import type { TOption } from '../types';
import { getOptionStyles, wrapperStyles } from './styles';

type TOptionsProps = {
    selectedOption: string;
    options: TOption[];
    onClick: (option: TOption) => void;
};

export const Options = ({
    selectedOption,
    options,
    onClick
}: TOptionsProps) => (
    <div className={wrapperStyles}>
        {options.map((option) => (
            <div
                key={option.value}
                className={getOptionStyles(selectedOption === option.value)}
                onClick={() => onClick(option)}
            >
                {option.label}
            </div>
        ))}
    </div>
);
