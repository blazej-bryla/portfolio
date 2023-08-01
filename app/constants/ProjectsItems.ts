import { ProjectItem } from '../types'
import { ExpressJS, JavaScript, NodeJS } from './technologies'

export const ProjectsItems: ProjectItem[] = [
  {
    label: 'Todo List API',
    date: ' 2020',
    technologies: [JavaScript, NodeJS, ExpressJS],
    description:
      'My application is a simple yet powerful Todo-List that enables easy management of daily tasks. You can add, delete, and mark tasks as completed. Built using JavaScript and Node.js with the Express framework, the app includes Jest-based testing and continuous integration with CircleCI. With a user-friendly interface and responsive design, it provides efficient task list management on any device.',
    repo: 'https://github.com/blazej-bryla/todo-list-api'
  }
]
