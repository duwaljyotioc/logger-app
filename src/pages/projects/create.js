import {Link, useNavigate} from "react-router-dom";
import '../../App.css';
import './create.scss';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Select from 'react-select'
import {projectActions} from "../../redux_store/project_slice";

function CreateProject() {
    const projects = useSelector(state => state.projects.projects)
    const navigateInstance = useNavigate();
    const dispatch = useDispatch();
    const [projectName, setName] = useState('');
    const [projectDescription, setDescription] = useState('');
    const [selectedAssignees, setSelectedAssignees] = useState('');
    const [selectedProjectManagers, setSelectedProjectManagers] = useState('');
    const storeAssignees = useSelector(state => state.users.users);

    function handleSubmit() {
        const latestProject = projects[(projects.length - 1)];
        const project = {
            id: latestProject.id + 1,
            name: projectName,
            description: projectDescription,
            stacks: [],
            assignees: selectedAssignees,
            project_manager: 'test',
        }
        dispatch(projectActions.addNewProject({project}))
        navigateInstance('/dashboard');
    }

    function handleChange(selectedUsers) {
        setSelectedAssignees(selectedUsers)
    }

    function handleProjectManagerChange(selectedUsers) {
        setSelectedProjectManagers(selectedUsers)
    }

    if (!storeAssignees) {
        return 'Loading';
    }

    return (
        <div className='d-flex justify-content-center mt-5 create-project'>
            <form className='w-50'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Project Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter Name" value={projectName}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Project Description</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter Description" value={projectDescription}
                           onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Assignees</label>
                    <Select options={storeAssignees} isMulti onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Project Managers</label>
                    <Select options={storeAssignees} isMulti onChange={handleProjectManagerChange}/>
                </div>

                <div className='d-flex gap-1-rem mt-3'>
                    <button type='button' className="btn btn-primary mr-2"
                            onClick={handleSubmit}>Create
                    </button>
                    <div><Link to='/dashboard' className="btn btn-secondary">Go Back</Link></div>
                </div>
            </form>
        </div>
    )
}

export default CreateProject;
