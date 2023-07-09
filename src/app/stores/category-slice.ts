import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategoryState {
  category: any;
}

const initialState: ICategoryState = {
  category: { id: "", name: "", articles: [] },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state: ICategoryState, action: PayloadAction<any>) => {
      state.category = action.payload;
    },
  },
});

export const { actions: categoryActions, reducer: categoryReducer } =
  categorySlice;
