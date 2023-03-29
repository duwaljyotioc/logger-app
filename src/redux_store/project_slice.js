import {createSlice} from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projects: [],
    currentProject: {},
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload.projects
    },
    getProject: (state, action) => {
      state.currentProject = state.projects.find(singleProject => singleProject.id === action.payload.id)
    }
  }
})

export const projectActions = projectSlice.actions;

export default projectSlice;
