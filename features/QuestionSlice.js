import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionId: null,
  questtionName: null,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,

  reducers: {
    setQuestionInfo: (state, action) => {
      state.questionId = action.payload.questionId;
      state.questtionName = action.payload.questionName;
    },
  },
});

export const { setQuestionInfo } = questionSlice.actions;

export const selectQuestionId = (state) => state.question.questionId;
export const selectQuestionName = (state) => state.question.questtionName;

export default questionSlice.reducer;
