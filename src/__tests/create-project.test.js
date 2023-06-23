import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProjectDetail from "../pages/projects/project-detail";

const mockStore = configureStore([]);
const initialState = {
    projects: {
        currentProject: {
            name: 'Test Project',
            description: 'Test Description',
            issues: [
                { id: 1, title: 'Issue 1', assignees: [] },
                { id: 2, title: 'Issue 2', assignees: [] },
            ],
        },
    },
};

describe('ProjectDetail', () => {
    test('renders ProjectDetail component', () => {
        const store = mockStore(initialState);
        const history = createMemoryHistory({ initialEntries: ['/projects/2'] });
        render(
          <Provider store={store}>
              <Router location={history.location} navigator={history}>
                  <ProjectDetail/>,
              </Router>
          </Provider>
        );

        const projectDetailPageElement = screen.getByTestId('project-detail-page-test-id');
        expect(projectDetailPageElement).toBeInTheDocument();
    });
});
