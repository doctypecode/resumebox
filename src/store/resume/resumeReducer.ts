import { getResume, updateResume } from "@/app/api/resume";
import { IResumeData } from "@/const/IResume";
import ResumeDummyData from "@/data/ResumeData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const resumeReducer = createSlice({
  name: 'resume',
  initialState: null as unknown as IResumeData,
  reducers: {
    setResume: (state, action: PayloadAction<{ resume: IResumeData }>) => {
      return action.payload.resume
    },
    // Add a skill
    addSkill: (state, action: PayloadAction<{ name: string; rating: string }>) => {
      state.skills.push(action.payload); // Directly update state since Immer is used
    },

    // Edit a skill
    editSkill: (state, action: PayloadAction<{ index: number; skill: any }>) => {
      const { index, skill } = action.payload;
      if (index >= 0 && index < state.skills.length) {
        state.skills[index] = { ...state.skills[index], ...skill }; // Directly update state
      }
    },

    // Remove a skill
    removeSkill: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.skills.length) {
        state.skills.splice(index, 1); // Directly update state
      }
    },

    // Add a skill
    addEducation: (state, action: PayloadAction<{ education: any }>) => {
      state.education.push(action.payload.education); // Directly update state since Immer is used
    },

    // Edit a skill
    editEducation: (state, action: PayloadAction<{ index: number; education: any }>) => {
      const { index, education } = action.payload;
      if (index >= 0 && index < state.education.length) {
        state.education[index] = { ...state.education[index], ...education }; // Directly update state
      }
    },

    // Remove a skill
    removeEducation: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.education.length) {
        state.education.splice(index, 1); // Directly update state
      }
    },

    // Edit Resume Name
    editResumeName: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.resumeName = name;
    },

    // Edit Personal Fields
    editPersonalFields: (state, action: PayloadAction<{ name: string, value: string }>) => {
      const { name, value } = action.payload;
      state.personal = {
        ...state.personal,
        [name]: value
      }
      updateResume(
        {
          resume: {
            id: state.id,
            personal: {...state.personal}
        }
      });
    }
  },
});

export const { 
  setResume, 
  addSkill, editSkill, removeSkill, 
  addEducation, editEducation, removeEducation, 
  editResumeName, editPersonalFields 
} = resumeReducer.actions;

export default resumeReducer;
