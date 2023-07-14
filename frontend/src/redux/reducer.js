import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFiles } from '../services/filesService';

const initialState = {
  files: [],
};

export const filesAsync = createAsyncThunk(
  'getFiles',
  async () => {
    const response = await getFiles();
    return response;
  }
);

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    update: (state, action) => {
      state.files = action.payload;
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(filesAsync.fulfilled, (state, action) => {
        state.files = action.payload;
      });
  },
});

export const { update } = filesSlice.actions;

export const selectFiles = (state) => state.files;

export default filesSlice.reducer;