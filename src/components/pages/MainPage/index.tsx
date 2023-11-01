import { useEffect } from 'react';

import { css } from '@emotion/css';

import { fetchCurrenciesList } from 'src/store/currencies/slice';
import { useAppDispatch } from 'src/store/hooks';

import { MainPageHeader } from './Header';
import { MainPageFooter } from './Footer';

export const MainPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCurrenciesList());
    }, [dispatch]);

    return (
        <div
            className={css`
                height: 100vh;
            `}
        >
            <MainPageHeader />
            <MainPageFooter />
        </div>
    );
};
