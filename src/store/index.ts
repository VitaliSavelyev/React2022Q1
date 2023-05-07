import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import homeReducer from './homeSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    form: formReducer,
    home: homeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
