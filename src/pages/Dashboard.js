import {Link, useNavigate} from "react-router-dom";
import './Dashboard.css';

function Dashboard() {
    const useNavigateInstance = useNavigate();
    const projects = [
        {
            id: 1,
            name: 'something',
            stacks: ['a'],
            assignees: [
              {
                  name: 'aa',
                  id: 1,
              }
            ],
            project_manager: 'Sonam'
        }
    ];

    function LogOutHandler() {
        useNavigateInstance('/login');
    }

    return (
        <div className='container'>
            <div className="d-flex justify-content-end gap-1-rem">
                <Link to={'/create-project'} className="btn btn-primary my-2">Create Project</Link>
                <Link to={'/login'} className={'btn btn-warning my-2 ml-3'}>Log Out</Link>
            </div>


            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Stack</th>
                    <th scope="col">Project Manager</th>
                    <th scope="col">Devs</th>
                </tr>
                </thead>
                <tbody>
                {
                    projects.map((singleProject, index) => {
                        return (
                            <tr key={singleProject.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{singleProject.name}</td>
                                <td>

                                </td>
                                <td>{singleProject.project_manager}</td>
                                <td>
                                    {
                                        singleProject.assignees.map((singleStack, stackIndex) => {
                                            // todo get computed value here
                                            return (
                                                <span key={stackIndex}>
                                                    { stackIndex === 0 ? singleStack.name : ', ' + singleStack.name }
                                                </span>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;
