import CoinsReducer from './homepageSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer:{
    coinss:CoinsReducer,
    }
})

export default store;