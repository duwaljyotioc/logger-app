import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/projects/create";

function App() {
    return (
        // todo segragate a separate route file for the following chunk.
        <Routes>
            <Route path='/login' element={<Login/>}>
            </Route>

            <Route path='/dashboard' element={<Dashboard/>}>
            </Route>

            <Route path='/create-project' element={<CreateProject/>}>
            </Route>
        </Routes>
    );
}

export default App;
