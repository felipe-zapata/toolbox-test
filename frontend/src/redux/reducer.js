import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFiles, getFileList } from '../services/filesService'

const initialState = {
  files: [],
  list: [],
  selectedFile: ''
}

export const filesAsync = createAsyncThunk(
  'getFiles',
  async () => {
    const response = await getFiles()
    return response
  }
)

export const fileAsync = createAsyncThunk(
  'getFile',
  async (fileName) => {
    const response = await getFiles(fileName)
    return response
  }
)

export const fileListAsync = createAsyncThunk(
  'getFileList',
  async () => {
    const response = await getFileList()
    return response
  }
)

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    update: (state, action) => {
      state.files = action.payload
    },
    updateSelectedFile: (state, action) => {
      state.selectedFile = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(filesAsync.fulfilled, (state, action) => {
        state.files = action.payload
      })
      .addCase(fileAsync.fulfilled, (state, action) => {
        state.files = action.payload
      })
      .addCase(fileListAsync.fulfilled, (state, action) => {
        state.list = action.payload
      })
  }
})

export const { update } = filesSlice.actions

export const selectFiles = (state) => state.files

export default filesSlice.reducer
