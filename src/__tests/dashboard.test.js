import React from 'react';
import { render, screen, act} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Dashboard from "../pages/Dashboard";
import {Router} from "react-router-dom";
import { createMemoryHistory } from 'history';

test('Dashboard component should be in the document', async () => {
  const initialState = {output: 10};
  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);
  const history = createMemoryHistory({ initialEntries: ['/dashboard'] });

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
      <Dashboard/>
      </Router>
    </Provider>
  );

  const dashboardElement = screen.getByTestId('dashboard-element');
  expect(dashboardElement).toBeInTheDocument();
});


test('Dashboard component should show text', async () => {
  const initialState = {output: 10};
  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);
  const history = createMemoryHistory({ initialEntries: ['/dashboard'] });

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <Dashboard/>
      </Router>
    </Provider>
  );

  const dashboardElement = screen.getByTestId('dashboard-element');
  expect(dashboardElement).toHaveTextContent('Dashboard')
});

test('Dashboard component should use effect', async () => {
  const fakeData = { message: 'Hello, World!' };
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(fakeData),
  });
  let store;
  const mockStore = configureStore();

  store = mockStore(fakeData);
  const history = createMemoryHistory({ initialEntries: ['/dashboard'] });

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <Dashboard/>
      </Router>
    </Provider>
  );

  await screen.findByText('Project Manager');
});

it('should fetch and set data correctly', async () => {
  const fakeData = { cartItems: ['item1', 'item2'] };

  fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(fakeData),
  });

  let component;

  let store;
  const mockStore = configureStore();

  store = mockStore(fakeData);
  const history = createMemoryHistory({ initialEntries: ['/dashboard'] });
  await act(async () => {
    component = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Dashboard/>
        </Router>
      </Provider>
    );
  });

  // Assert that the component initially renders the loading state
  // expect(component.getByText('Loading...')).toBeInTheDocument();

  // Wait for the data to be fetched and the loading state to be updated
  await component.findByText('Data Loaded');

  // Assert that the component renders the fetched data correctly
  // expect(component.getByText('item1')).toBeInTheDocument();
  // expect(component.getByText('item2')).toBeInTheDocument();
});
