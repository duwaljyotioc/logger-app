import {configureStore} from "@reduxjs/toolkit";
import projectSlice from "./project_slice";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    projects: projectSlice.reducer,
    users: userSlice.reducer,
  }
});

export default appStore;
