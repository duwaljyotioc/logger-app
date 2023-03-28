// todo fill the data from the component with the help of action.
import login from "../../pages/Login";

export const getProjectList = () => {
    return [
        {
            id: 2,
            name: 'Test project 2',
            progress: '30%',
            stacks: ['backend'],
            project_manager: 'Sonam',
            due_date: new Date(),
            assignees: [
                {
                    name: 'Jyoti',
                    stacks: 'FE/BE'
                }
            ]
        },]
}

export const setUsersAction = (users = []) => {
    return {
        type: 'SET_USERS',
        payload: users,
    };
}

export const projectsLoaded = (projects) => ({
    type: 'project/projectsLoaded',
    payload: projects,
})
