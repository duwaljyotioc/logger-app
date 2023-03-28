import {Link} from "react-router-dom";
import '../../App.css';
import './create.scss';
import {useState} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import Select from 'react-select'
import {setUsersAction} from "../../store/actions";

function CreateProject() {
    const [projectName, setName] = useState('');
    const [projectDescription, setDescription] = useState('');
    const [selectedAssignees, setSelectedAssignees] = useState('');
    const [selectedProjectManagers, setSelectedProjectManagers] = useState('');
    // const projects = useSelector(state => state.getProjectList);
    const useDispatchInstance = useDispatch();
    const assignees = [
        {value: '1', label: 'Jyoti Duwal'},
        {value: '2', label: 'Tapan BK'},
        {value: '3', label: 'Sabi'}
    ];

    useDispatchInstance(setUsersAction(assignees))

    const storeAssignees = useSelector(state => state.users.users);

    const projectManagers = [
        {value: '4', label: 'Sonam Singh'},
        {value: '5', label: 'Bibek'},
        {value: '6', label: 'Sagar'}
    ]

    function handleSubmit() {
        console.log('handles submit', selectedProjectManagers,)
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
                           placeholder="Enter Name" value={projectName} onChange={(e) => setName(e.target.value)}/>
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
                    <Select options={projectManagers} isMulti onChange={handleProjectManagerChange}/>
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
