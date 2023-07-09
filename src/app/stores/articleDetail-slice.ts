import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IArticleDetailState {
  detail: any;
}

const initialState: IArticleDetailState = {
  detail: {},
};

export const articleDetailSlice = createSlice({
  name: "articleDetail",
  initialState,
  reducers: {
    setArticleDetail: (
      state: IArticleDetailState,
      action: PayloadAction<any>
    ) => {
      state.detail = action.payload;
    },
  },
});

export const { actions: articleDetailActions, reducer: articleDetailReducer } =
  articleDetailSlice;
