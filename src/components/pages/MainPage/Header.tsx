import { useMemo } from 'react';

import { css } from '@emotion/css';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setCurrentValue } from 'src/store/currencies/slice';
import { LOADING_STATUS } from 'src/store/constants';

import { Stack } from 'src/components/ui/Stack';
import { SelectField } from 'src/components/ui/SelectField';

import kitten from 'src/images/Kitten.png';

import { Contaner } from 'src/shared/Container';

import { useScreenWidth } from 'src/hooks/useScreenWidth';

import { Logo } from './Logo';

const MEDIA_WIDTH = 500;

export const MainPageHeader = () => {
    const width = useScreenWidth();

    const dispatch = useAppDispatch();
    const { entities: options, error, status } = useAppSelector((state) => state.currencies);

    const transformedOptions = useMemo(
        () => (options !== null ? options.map((option) => ({ value: option.id, label: option.id })) : []),
        [options]
    );

    const handleChange = (target: { name: string; value: string }): void => {
        if (target.name === 'currency') {
            dispatch(setCurrentValue({ id: target.value }));
        }
    };

    return (
        <header>
            <Contaner>
                <Stack
                    justifyContent="space-between"
                    alignItems="flex-start"
                    className={css`
                        padding-top: 28px;

                        @media (max-width: ${MEDIA_WIDTH}px) {
                            justify-content: center;
                        }
                    `}
                >
                    <Stack direction="column" gap={10}>
                        <Logo />
                        {!error ? (
                            <SelectField
                                options={transformedOptions}
                                name="currency"
                                value=""
                                defaultOption={status === LOADING_STATUS ? 'Загрузка валют...' : 'Выберите валюту'}
                                onChange={handleChange}
                            />
                        ) : (
                            <p>Произошла ошибка при загрузке валют</p>
                        )}
                    </Stack>
                    {width > MEDIA_WIDTH && (
                        <img
                            alt="Kitten"
                            src={kitten}
                            className={css`
                                position: relative;
                                top: -28px;
                            `}
                        />
                    )}
                </Stack>
            </Contaner>
        </header>
    );
};
