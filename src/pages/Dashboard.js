import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <Link to={'/login'}>Login</Link>
        </div>
    )
}

export default Dashboard;
