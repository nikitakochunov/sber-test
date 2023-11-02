import { useState, useEffect } from 'react';

const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

const EVENT_TYPE = 'resize';

export const useScreenWidth = () => {
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth());
        };
        
        window.addEventListener(EVENT_TYPE, resizeListener);

        return () => {
            window.removeEventListener(EVENT_TYPE, resizeListener);
        };
    }, []);

    return width;
};
