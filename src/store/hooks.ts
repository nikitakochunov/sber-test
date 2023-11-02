import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook
} from 'react-redux';
import type { TRootState, TAppDispatch } from '.';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
