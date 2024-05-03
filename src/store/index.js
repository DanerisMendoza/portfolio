// store.js
import { configureStore } from '@reduxjs/toolkit';
import fullscreenReducer from './portfolio/fullscreen';

const store = configureStore({
  reducer: {
    fullscreenReducer: fullscreenReducer,
  },
});

export default store;
