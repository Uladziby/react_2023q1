/** @format */
import formPageSlice from './slices/formPageSlice';
import { mainApi } from './slices/mainApi';
import mainSlice from './slices/mainSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    main: mainSlice,
    form: formPageSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
