import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setCurrentValue } from 'src/store/currencies/slice';
import { LOADING_STATUS } from 'src/store/constants';
import { getCurrencies } from 'src/store/currencies/selectors';

import { Stack } from 'src/components/ui/Stack';
import { SelectField } from 'src/components/ui/SelectField';
import type { TOnChange } from 'src/components/ui/SelectField/types';

import { Contaner } from 'src/shared/Container/';
import { Logo } from 'src/shared/Logo';

import kitten from 'src/images/Kitten.png';

import { transformOptions } from 'src/utils/transformOptions';

import { useScreenWidth } from 'src/hooks/useScreenWidth';

import { imgStyles, stackStyles } from './styles';
import {
    ERROR_MESSAGE,
    MEDIA_WIDTH,
    SELECT_FIELD_LOADING_TEXT,
    SELECT_FIELD_TEXT
} from './constants';

export const MainPageHeader = () => {
    const width = useScreenWidth();

    const dispatch = useAppDispatch();
    const { entities: options, error, status } = useAppSelector(getCurrencies);

    const selectFieldDefaultOption =
        status === LOADING_STATUS
            ? SELECT_FIELD_LOADING_TEXT
            : SELECT_FIELD_TEXT;

    const transformedOptions = useMemo(
        () => transformOptions(options, 'id', 'id'),
        [options]
    );

    const handleSelectChange: TOnChange = (target) => {
        dispatch(setCurrentValue({ id: target.value }));
    };

    return (
        <header>
            <Contaner>
                <Stack
                    justifyContent="space-between"
                    alignItems="flex-start"
                    className={stackStyles}
                >
                    <Stack direction="column" gap={10}>
                        <Logo />
                        {!error ? (
                            <SelectField
                                options={transformedOptions}
                                name="currency"
                                value=""
                                defaultOption={selectFieldDefaultOption}
                                onChange={handleSelectChange}
                            />
                        ) : (
                            <p>{ERROR_MESSAGE}</p>
                        )}
                    </Stack>
                    {width > MEDIA_WIDTH && (
                        <img alt="Kitten" src={kitten} className={imgStyles} />
                    )}
                </Stack>
            </Contaner>
        </header>
    );
};
