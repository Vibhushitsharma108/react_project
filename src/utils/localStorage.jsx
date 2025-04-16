localStorage.clear()

const employees = [
  {
    Id: "E001",
    firstname: "Aarav",
    password: "123",
    email: "employee1@example.com",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Report",
        description: "Compile the Q4 financial report.",
        date: "2025-01-15",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Discuss project updates with the team.",
        date: "2025-01-10",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Presentation",
        description: "Prepare slides for client demo.",
        date: "2025-01-12",
        category: "Client Relations"
      }
    ]
  },
  {
    Id: "E002",
    firstname: "Ishaan",
    password: "123",
    email: "employee2@example.com",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code Review",
        description: "Review the latest pull request.",
        date: "2025-01-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Fixing",
        description: "Resolve high-priority bugs.",
        date: "2025-01-12",
        category: "Development"
      }
    ]
  },
  {
    Id: "E003",
    firstname: "Priya",
    password: "123",
    email: "employee3@example.com",
    taskCounts: { active: 1, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Content Draft",
        description: "Write the draft for the new blog post.",
        date: "2025-01-17",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Newsletter",
        description: "Design and send the monthly newsletter.",
        date: "2025-01-09",
        category: "Marketing"
      }
    ]
  },
  {
    Id: "E004",
    firstname: "Ananya",
    password: "123",
    email: "employee4@example.com",
    taskCounts: { active: 1, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Inventory Check",
        description: "Conduct a physical check of inventory.",
        date: "2025-01-18",
        category: "Operations"
      }
    ]
  },
  {
    Id: "E005",
    firstname: "Rohan",
    password: "123",
    email: "employee5@example.com",
    taskCounts: { active: 1, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Policy Update",
        description: "Update HR policies for the new year.",
        date: "2025-01-20",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Onboarding",
        description: "Complete onboarding for new hires.",
        date: "2025-01-11",
        category: "HR"
      }
    ]
  }
];

  const admin = [
    {
      "Id": "A001",
      "password": "123",
      "email": "admin@example.com"
    }
  ];

  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))


  }
  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))


    return{employees,admin}
  }