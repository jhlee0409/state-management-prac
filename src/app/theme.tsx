import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  isDarkTheme: boolean;
}

const initialState = { isDarkTheme: false };

export const themeState = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeState.actions;

export default themeState.reducer;
