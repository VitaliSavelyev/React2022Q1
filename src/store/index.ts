import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import homeReducer from './homeSlice';

export default configureStore({
  reducer: {
    form: formReducer,
    home: homeReducer
  },
});
