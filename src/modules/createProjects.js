export class projectConstructor {
    constructor (name) {
        this.name = name;
        this.todos = []
    }
}

export const projectsContainer = document.querySelector('ul')

export function renderProject (project) {
    //<li>Demo Project<img src="./assets/delete.svg" alt=""></li>
    const projectContainer = document.createElement('li')
    const deleteButton = document.createElement('img')
    projectContainer.classList.add(`${project.name}`)

    projectContainer.innerText = project.name
    deleteButton.style.cssText = 'content: url(./assets/delete.svg);'
    projectContainer.appendChild(deleteButton)
    projectsContainer.appendChild(projectContainer)
}

export const projectNameValue = document.querySelector('#projectInput')