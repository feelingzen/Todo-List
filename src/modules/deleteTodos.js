export function deleteTodo (e) {
    document.querySelector('.todoContainer').removeChild(e.target.parentNode)
}

export const deleteTodoButton = document.querySelectorAll('.deleteTodo')
