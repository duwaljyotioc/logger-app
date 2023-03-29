const data = {
  projects: [
    {
      id: 1,
      name: 'First Project',
      stacks: [],
      assignees: [
        {
          name: 'Jyoti',
          id: 1,
        }
      ],
      issues: [
        {
          id: 1,
          title: 'Project name is not being displayed',
          assignees: [
            {
              name: 'Jyoti',
              id: 1,
            }
          ]
        },
        {
          id: 2,
          title: 'Project name is not correct',
          assignees: [
            {
              name: 'Jyoti',
              id: 1,
            }
          ]
        }
      ],
      project_manager: 'Sonam',
      description: 'First Lorem ipsum'
    },

    {
      id: 2,
      name: 'Second Project',
      stacks: ['Laravel', 'AWS'],
      assignees: [
        {
          name: 'Jyoti',
          id: 1,
        }
      ],
      issues: [
        {
          id: 3,
          title: 'Second Project name is not being displayed',
          assignees: [
            {
              name: 'Jyoti',
              id: 1,
            }
          ]
        },
        {
          id: 4,
          title: 'Second Project name is not correct',
          assignees: [
            {
              name: 'Jyoti',
              id: 1,
            }
          ]
        }
      ],
      project_manager: 'Bibek',
      description: 'Second Project description.'
    },
  ],
  users: [
    {id: 1, value: 1, label: 'Jyoti Duwal'},
    {id: 2, value: 2, label: 'Tapan BK'},
    {id: 3, value: 3, label: 'Sabi'},
    {id: 4, value: 4, label: 'Sonam Singh'},
    {id: 5, value: 5, label: 'Bibek'},
    {id: 6, value: 6, label: 'Sagar'}
  ]
}


export default data;
