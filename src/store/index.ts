// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import resumeReducer from './resume/resumeReducer';


const store = configureStore({
  reducer: {
    resume: resumeReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
