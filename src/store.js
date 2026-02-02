import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './features/clients/clientSlice';
import adminReducer from './features/admin/featureFlagsSlice';

const store = configureStore({
  reducer: {
    clients: clientReducer,
    admin: adminReducer,
  },
});

export default store;