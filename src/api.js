import {projectsLoaded} from "./store/actions";

// Thunk function
export const fetchProjects = (dispatch) => {
    const projects = [];
    dispatch(projectsLoaded(projects))
}
