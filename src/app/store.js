import { configureStore } from '@reduxjs/toolkit'

import userReducer from "../features/feature1/userDataSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer
  },
})