import {todoRender, createTodos, submissionButton} from '../src/modules/createTodos'
import {deleteTodo, deleteTodoButton} from '../src/modules/deleteTodos'
import {modalButton, modalFunctionality, modalSubmit, modalForm} from './modules/modalPopup'
import {projectConstructor, projectNameValue, renderProject, projectsContainer} from './modules/createProjects';

const projects = [];
const demoProject = new projectConstructor('Demo Project')
let activeProject = projects[0];

modalButton.addEventListener('click', modalFunctionality)
deleteTodoButton.forEach(todo => {
    todo.addEventListener('click', deleteTodo, () => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].name == activeProject) {
                projects[i].todos.splice()
            }
        }
    })
})

projects.forEach(project => {
    document.querySelector(`.${project.name}`).addEventListener('click', (e) => {
        document.querySelector('.todoContainer').innerHTML = ''
        project.todos.forEach(todo => {
            
        })
        e.target.style.cssText = 'background-color: var(--active-project);'
    })
})

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modalFunctionality()
    document.querySelector('ul').innerHTML = ''
    projects.push(new projectConstructor(projectNameValue.value));
    console.log(projects)
    projects.forEach(project => {
        renderProject(project)
    })
    projects.forEach(project => {
        document.querySelector(`.${project.name}`).addEventListener('click', (e) => {
            document.querySelector('.todoContainer').innerHTML = ''
            projects.forEach(project => {
                document.querySelector(`.${project.name}`).style.cssText = 'background-color: var(--primary-buttons);'
            })
            activeProject = `${e.target.className}`
            e.target.style.cssText = 'background-color: var(--active-project);'
            project['todos'].forEach(todo => {
                todoRender()
            })
        })
    })
});

submissionButton.addEventListener('submit', (e) => {
    e.preventDefault();
    let todoTitleForm = document.getElementById('todoName').value;
    let todoDateForm = document.getElementById('todoDate').value;
    console.log(todoDateForm, todoTitleForm)
    todoRender(todoTitleForm, todoDateForm);
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == activeProject) {
            projects[i].todos.push(new createTodos(todoTitleForm, todoDateForm))
        }
    }
});