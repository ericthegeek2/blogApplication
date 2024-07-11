import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  
}

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    setUserdataSlice: (state, action) => {
     
       state.name = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUserdataSlice} = userSlice.actions

export default userSlice.reducer