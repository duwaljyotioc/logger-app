const data = {
  projects: [
    {
      id: 1,
      name: 'First Project',
      stacks: ['a'],
      assignees: [
        {
          name: 'aa',
          id: 1,
        }
      ],
      issues: [
        {
          id: 1,
          title: 'Project name is not being displayed'
        },
        {
          id: 2,
          title: 'Project name is not correct'
        }
      ],
      project_manager: 'Sonam',
      description: 'First Lorem ipsum'
    },

    {
      id: 2,
      name: 'Second Project',
      stacks: ['a'],
      assignees: [
        {
          name: 'aa',
          id: 1,
        }
      ],
      issues: [
        {
          id: 3,
          title: 'Second Project name is not being displayed'
        },
        {
          id: 4,
          title: 'Second Project name is not correct'
        }
      ],
      project_manager: 'Sonam',
      description: 'Second Lorem ipsum'
    },
  ]
}


export default data;
