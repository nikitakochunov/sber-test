import { css } from '@emotion/css';
import { Stack } from 'src/components/ui/Stack';

import { Title } from 'src/components/ui/Title';

import { useAppSelector } from 'src/store/hooks';
import { getCurrencies } from 'src/store/currencies/selectors';

import { footerStyles } from './styles';
import { FOOTER_TEXT_INITIAL } from './contants';

export const MainPageFooter = () => {
    const { currentValue } = useAppSelector(getCurrencies);
    const titleText = currentValue?.name ?? FOOTER_TEXT_INITIAL;

    return (
        <footer className={footerStyles}>
            <Stack
                justifyContent="center"
                alignItems="center"
                className={css`
                    height: 100%;
                `}
            >
                <Title variant="h2" text={titleText} color="#fff" />
            </Stack>
        </footer>
    );
};
