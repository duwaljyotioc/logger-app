import {configureStore} from "@reduxjs/toolkit";
import projectSlice from "./project_slice";

const appStore = configureStore({
  reducer: {
    projects: projectSlice.reducer,
  }
});

export default appStore;
