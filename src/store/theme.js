import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkGlobal: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsDarkGlobal: (state, action) => {
      state.isDarkGlobal = action.payload;
    },
  },
});

export const { setIsDarkGlobal } = themeSlice.actions;
export default themeSlice.reducer;
