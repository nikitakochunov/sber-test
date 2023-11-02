import { Title } from 'src/components/ui/Title';
import { Stack } from 'src/components/ui/Stack';

import { LOGO_TITLE_TEXT } from './constants';
import { LogoSubtitle } from './Subtitle';

export const Logo = () => (
    <Stack alignItems="center" gap={10}>
        <Title text={LOGO_TITLE_TEXT} variant="h1" />
        <LogoSubtitle />
    </Stack>
);
