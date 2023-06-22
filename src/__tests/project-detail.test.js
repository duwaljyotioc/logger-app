import React from 'react';
import { render, screen} from '@testing-library/react';
import ProjectDetail from "../pages/projects/project-detail";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('Project detail page should be in document', async () => {
  const initialState = {output: 10};
  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <ProjectDetail/>
    </Provider>
  );

  const element = screen.getByTestId('project-detail-page-test-id');
  expect(element).toBeInTheDocument();
});


test('should show project detail page', async () => {
  const initialState = {output: 10};
  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <ProjectDetail/>
    </Provider>
  );

  const element = screen.getByTestId('project-detail-page-test-id');
  expect(element).toHaveTextContent('Project Detail Page')
});


