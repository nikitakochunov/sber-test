import { css } from '@emotion/css';

import { Title } from 'src/components/ui/Title';
import { Stack } from 'src/components/ui/Stack';

export const Logo = () => {
    const logo = 'currencies academic terms';

    return (
        <Stack alignItems="center" gap={10}>
            <Title text="CAT" variant="h1" />
            <div
                className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                `}
            >
                {logo.split(' ').map((el) => (
                    <span
                        key={el}
                        className={css`
                            font-size: 20px;
                        `}
                    >
                        {el}
                    </span>
                ))}
            </div>
        </Stack>
    );
};
