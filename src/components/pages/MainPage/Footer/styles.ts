import { css } from '@emotion/css';
import { MAIN_PAGE_FOOTER_ZINDEX } from 'src/constants';

export const footerStyles = css`
    background-color: #000;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    z-index: ${MAIN_PAGE_FOOTER_ZINDEX};
`;
