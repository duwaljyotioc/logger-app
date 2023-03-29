import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/projects/create";
import {projectActions} from "./redux_store/project_slice";
import data from "./data";
import {useDispatch} from "react-redux";
import ProjectDetail from "./pages/projects/project-detail";
import {userActions} from "./redux_store/userSlice";

function App() {
  const dispatch = useDispatch();
  const setProjects = () => dispatch(projectActions.setProjects({projects: data.projects}))
  const setUsers = () =>    dispatch(userActions.setUsers({users: data.users}))
  setProjects();
  setUsers();

  return (
    // todo segragate a separate route file for the following chunk.
    <Routes>
      <Route path='/login' element={<Login/>}>
      </Route>

      <Route path='/dashboard' element={<Dashboard/>}>
      </Route>

      <Route path='/create-project' element={<CreateProject/>}>
      </Route>

      <Route path='/projects/:projectId' element={<ProjectDetail/>}>
      </Route>
    </Routes>
  );
}

export default App;
