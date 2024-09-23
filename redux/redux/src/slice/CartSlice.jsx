import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    value: 100
  },
  reducers: {
    incrementCart: state => {

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 100
    },
    decrementCart: state => {
      state.value -= 50
    },
    multipleCart: state => {
      state.value *= 2
    },
    incrementByAmountCart: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { incrementCart, decrementCart,multipleCart, incrementByAmountCart } = cart.actions

export default cart.reducer