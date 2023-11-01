import { useState, useEffect } from 'react';

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

export const useScreenWidth = () => {
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth());
        };
        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return width;
};
