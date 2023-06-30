import { deleteTodo } from "./deleteTodos";

class createTodos {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }
}

function todoRender (title, date) {
    const todoContainer = document.createElement('div')
    const todoTitle = document.createElement('p')
    const todoDate = document.createElement('p')
    const deleteButton = document.createElement('img')

    todoContainer.classList.add('todo')
    todoTitle.innerText = title;
    todoDate.innerText = date;
    deleteButton.classList.add('deleteTodo')

    deleteButton.style.cssText = 'content: url(./assets/delete.svg)'

    todoContainer.append(todoTitle, todoDate, deleteButton)
    document.querySelector('.todoContainer').appendChild(todoContainer)
    deleteButton.addEventListener('click', deleteTodo)
}

const submissionButton = document.querySelector('form')

export {createTodos, todoRender, submissionButton}