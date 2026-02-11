import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './features/clients/clientSlice';
import adminReducer from './features/admin/featureFlagsSlice';
import demoAccessReducer from './features/admin/demoAccess/demoAccessSlice';

const store = configureStore({
  reducer: {
    clients: clientReducer,
    admin: adminReducer,
    demoAccess: demoAccessReducer,
  },
});

export default store;
