import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/Counterslice'
import cartReducer from '../slice/CartSlice'
export default configureStore({
  reducer: {
    counter : counterReducer,
    cart: cartReducer
  }
})