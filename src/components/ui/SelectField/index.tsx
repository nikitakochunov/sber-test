import { useState } from 'react';

import { ChevronDown } from 'src/icons/ChevronDown';

import { Stack } from 'src/components/ui/Stack';

import { Options } from './Options';
import type { TOption, SelectFieldProps } from './types';
import { baseStyles, getWrapperStyles, inputStyles } from './styles';

export const SelectField = ({
    options,
    defaultOption,
    name,
    value,
    onChange
}: SelectFieldProps) => {
    const doOptionsExist = options.length > 0;

    const [selected, setSelected] = useState(value || '');

    const selectedOption = options.find((option) => option.value === selected);

    const [textValue, setTextValue] = useState(selectedOption?.label ?? '');
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        if (!doOptionsExist) return;

        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    const handleOptionClick = ({ value: optionValue, label }: TOption) => {
        if (optionValue === selectedOption?.value) return;

        setSelected(optionValue);
        setTextValue(label);
        onChange({ label, value: optionValue });
        toggleOpen();
    };

    return (
        <div className={baseStyles}>
            <div onClick={toggleOpen} className={getWrapperStyles(isOpen)}>
                <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    wrap="no-wrap"
                >
                    <input
                        readOnly={true}
                        id={name}
                        name={name}
                        value={textValue}
                        placeholder={defaultOption}
                        className={inputStyles}
                    />
                    {doOptionsExist && <ChevronDown />}
                </Stack>
            </div>
            {isOpen && doOptionsExist && (
                <Options
                    options={options}
                    selectedOption={selected}
                    onClick={handleOptionClick}
                />
            )}
        </div>
    );
};
