import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth.reducer'
import shoppingCartSlice from './shoppingCart/shoppingCart.reducer'

const store = configureStore({
  reducer: {
    authSlice,
    shoppingCartSlice
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
