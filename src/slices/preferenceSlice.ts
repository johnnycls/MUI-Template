import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type preferenceState = { isLightMode: boolean };

const preferenceInitialState: preferenceState = { isLightMode: true };

export const preferenceSlice = createSlice({
  name: "preference",
  initialState: preferenceInitialState,
  reducers: {
    toggleMode: (state: preferenceState, { payload }: PayloadAction<{}>) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { toggleMode } = preferenceSlice.actions;
export default preferenceSlice.reducer;
