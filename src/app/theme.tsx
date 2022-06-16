import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  isDarkTheme: boolean;
}

const initialState = { isDarkTheme: true } as ThemeState;

export const themeState = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { changeTheme } = themeState.actions;

export default themeState.reducer;
