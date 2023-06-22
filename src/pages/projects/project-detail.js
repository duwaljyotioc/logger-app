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
  const currentProject = useSelector(state => state.projects?.currentProject)
  if (!currentProject) {
    return <div data-testid="project-detail-page-test-id">
      Project Detail Page
    </div>
  }

  return (
    <div className='container' data-testid="project-detail-page-test-id">
      <h2>Project Detail Page</h2>
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
            <table className="table">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Assignee</th>
              </tr>
              </thead>
              <tbody>
              {
                currentProject.issues.map((singleIssue) => (
                  <tr key={singleIssue.id}>
                    <th scope="row">{singleIssue.id}</th>
                    <td>{singleIssue.title}</td>
                    <td>
                      {
                        singleIssue.assignees.map((singleStack, stackIndex) => {
                          // todo get computed value here
                          return (
                            <span key={stackIndex}>{stackIndex === 0 ? singleStack.name : ', ' + singleStack.name}</span>
                          )
                        })
                      }
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail;
