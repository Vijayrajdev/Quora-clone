import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";
import questionReducer from "../features/QuestionSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});
