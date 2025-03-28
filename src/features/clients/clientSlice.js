import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchClients = createAsyncThunk("clients/fetchClients", async () => {
  const response = await axios.get("https://jhelum-client-service.azurewebsites.net/clients");
  return response.data;
});

const clientSlice = createSlice({
  name: "clients",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default clientSlice.reducer;
