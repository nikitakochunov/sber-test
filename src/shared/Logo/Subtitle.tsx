import { css } from '@emotion/css';

import { Stack } from 'src/components/ui/Stack';

import { LOGO_SUBTITLE_TEXT } from './constants';

export const LogoSubtitle = () => (
    <Stack direction="column" alignItems="flex-start">
        {LOGO_SUBTITLE_TEXT.split(' ').map((el) => (
            <span
                key={el}
                className={css`
                    font-size: 20px;
                `}
            >
                {el}
            </span>
        ))}
    </Stack>
);
