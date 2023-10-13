import { createSlice } from "@reduxjs/toolkit";

export interface FavouriteState {
  favouriteId: string;
}

const initialState: FavouriteState = {
  favouriteId: "",
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    setFavouriteId: (state, action) => {
      return { ...state, favouriteId: action.payload };
    },
  },
});

export const { setFavouriteId } = favouriteSlice.actions;
export default favouriteSlice.reducer;
