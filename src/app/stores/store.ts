import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./category-slice";
import { articleDetailReducer } from "./articleDetail-slice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    articleDetail: articleDetailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
