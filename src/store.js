import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './features/clients/clientSlice';

const store = configureStore({
  reducer: {
    clients: clientReducer,
  },
});

export default store;