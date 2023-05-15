import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import adminReducer from '../features/admin/adminSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    admin: adminReducer
  }
})
