import { css } from '@emotion/css';

import { Title } from 'src/components/ui/Title';

import { MAIN_PAGE_FOOTER_ZINDEX } from 'src/constants';
import { useAppSelector } from 'src/store/hooks';

export const MainPageFooter = () => {
    const { currentValue } = useAppSelector((state) => state.currencies);

    return (
        <footer
            className={css`
                background-color: #000;
                padding: 30px;
                text-align: center;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: ${MAIN_PAGE_FOOTER_ZINDEX};
            `}
        >
            <Title variant="h2" text={currentValue?.name ?? 'Some Currency'} color="#fff" />
        </footer>
    );
};
