import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    accessToken: !localStorage.getItem('access_token')
      ? ''
      : localStorage.getItem('access_token'),
    admin: {}
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    setAdmin: (state, action) => {
      state.admin = action.payload
    }
  }
})

export const { setAccessToken, setAdmin } = adminSlice.actions

export default adminSlice.reducer
