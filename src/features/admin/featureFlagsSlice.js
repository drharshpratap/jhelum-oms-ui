import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  featureFlags: {
    clients: true,
    documents: true,
    inbox: true,
  },
};

const featureFlagsSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setFeatureFlag(state, action) {
      const { feature, value } = action.payload;
      state.featureFlags[feature] = value;
    },
  },
});

export const { setFeatureFlag } = featureFlagsSlice.actions;
export default featureFlagsSlice.reducer;