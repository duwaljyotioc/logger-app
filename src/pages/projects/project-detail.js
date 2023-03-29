import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {projectActions} from "../../redux_store/project_slice";

function ProjectDetail() {
  const paramInstance = useParams();
  const dispatch = useDispatch();
  // const currentProjectId = paramInstance.projectId;
  const currentProjectId = 2;
  const getProjectDetail = () => dispatch(projectActions.getProject({id: currentProjectId}))

  getProjectDetail();
  const currentProject = useSelector(state => state.projects.currentProject)
  if (!currentProject) {
    return <div>...</div>
  }

  return (
    <div className='container'>
      <div className="d-flex justify-content-end gap-1-rem">
        <Link to={'/dashboard'} className="btn btn-primary my-2">Back to Projects</Link>

      </div>
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{currentProject.name}</h5>
            <p className="card-text">{currentProject.description}</p>
          </div>

          <h4 className='p-lg-4'>Issues</h4>

          <ul className="list-group">
            {
              currentProject.issues.map((singleIssue) => (
                <li className="list-group-item" key={singleIssue.id}>{singleIssue.title}</li>
              ))
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail;
