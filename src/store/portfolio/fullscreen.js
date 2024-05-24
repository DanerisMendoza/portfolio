import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeIndex: null,
  isFullScreen: false,
};

const fullScreenSlice = createSlice({
  name: 'fullscreen',
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    setIsFullScreen: (state, action) => {
      state.isFullScreen = action.payload;
    },
  },
});

export const { setActiveIndex, setIsFullScreen } = fullScreenSlice.actions;
export default fullScreenSlice.reducer;
