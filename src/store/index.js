// store.js
import { configureStore } from '@reduxjs/toolkit';
import fullscreenReducer from './portfolio/fullscreen';
import themeReducer from './theme';

const store = configureStore({
  reducer: {
    fullscreenReducer: fullscreenReducer,
    themeReducer: themeReducer,
  },
});

export default store;
