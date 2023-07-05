import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategoryState {
  articles: any[];
}

const initialState: ICategoryState = {
  articles: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setToken: (state: ICategoryState, action: PayloadAction<any>) => {
      state.articles = action.payload;
    },
  },
});

export const { actions: categoryActions, reducer: categoryReducer } =
  categorySlice;
