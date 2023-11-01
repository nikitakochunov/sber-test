import { useState } from 'react';
import { css } from '@emotion/css';

import { SELECT_ZINDEX } from 'src/constants';

import { ChevronDown } from 'src/icons/ChevronDown';

import { Options } from './Options';
import type { OptionType, SelectFieldProps } from './types';
import {
    SELECT_BORDER,
    SELECT_FONT_SIZE,
    SELECT_HEIGHT,
    SELECT_PADDING_RIGHT,
    SELECT_PADDING_TOP,
    SELECT_WIDTH
} from './constants';

export const SelectField = ({ options, defaultOption, name, value, onChange }: SelectFieldProps) => {
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

    const handleOptionClick = ({ value: optionValue, label }: OptionType) => {
        if (optionValue === selectedOption?.value) return;

        setSelected(optionValue);
        setTextValue(label);
        onChange({ name, value: optionValue });
        toggleOpen();
    };

    return (
        <div
            className={css`
                z-index: ${SELECT_ZINDEX};
                min-width: ${SELECT_WIDTH};
                min-height: ${SELECT_HEIGHT};
            `}
        >
            <div
                onClick={toggleOpen}
                className={css`
                    cursor: pointer;

                    border-radius: 10px;
                    padding: ${SELECT_PADDING_TOP} ${SELECT_PADDING_RIGHT};
                    border: ${SELECT_BORDER};
                    transition: all 0.3s;
                    ${!isOpen && 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
                `}
            >
                <input
                    readOnly={true}
                    id={name}
                    name={name}
                    value={textValue}
                    placeholder={defaultOption}
                    className={css`
                        cursor: pointer;
                        outline: none;
                        font-size: ${SELECT_FONT_SIZE};
                    `}
                />
                {doOptionsExist && <ChevronDown />}
            </div>
            {isOpen && doOptionsExist && (
                <Options options={options} selectedOption={selected} onClick={handleOptionClick} />
            )}
        </div>
    );
};
