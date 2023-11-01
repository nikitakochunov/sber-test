import { css } from '@emotion/css';
import type { OptionType } from './types';
import { SELECT_BORDER, SELECT_FONT_SIZE, SELECT_HEIGHT, SELECT_PADDING_RIGHT, SELECT_PADDING_TOP } from './constants';

type OptionsProps = {
    selectedOption: string;
    options: OptionType[];
    onClick: (option: OptionType) => void;
};

const styles = css`
    padding: ${SELECT_PADDING_TOP} ${SELECT_PADDING_RIGHT};
    border: ${SELECT_BORDER};
    font-size: ${SELECT_FONT_SIZE};
`;

export const Options = ({ selectedOption, options, onClick }: OptionsProps) => (
    <div
        className={css`
            margin-top: 5px;
            height: calc(${SELECT_HEIGHT} * 4);
            overflow-y: scroll;
            border-bottom: ${SELECT_BORDER};
        `}
    >
        {options.map((option) => (
            <div
                key={option.value}
                className={css`
                    ${styles}
                    min-height: ${SELECT_HEIGHT};
                    cursor: pointer;
                    background-color: #fff;
                    ${selectedOption === option.value && 'background-color: #f0efef; cursor: default;'}

                    &:hover {
                        background-color: #f0efef;
                    }
                `}
                onClick={() => onClick(option)}
            >
                {option.label}
            </div>
        ))}
    </div>
);
