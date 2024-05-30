import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardState';
import companyReducer from './companySlice';


const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    company: companyReducer,

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
