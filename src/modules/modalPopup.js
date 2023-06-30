const modalButton = document.querySelector('#addProject')
const modalForm = document.querySelector('#modalForm')
const modal = document.querySelector('.modal')
const modalSubmit = document.querySelector('#modalSubmit')
let modalActive = false

function modalFunctionality () {
    if (modalActive === false) {
        document.querySelector('main').style.cssText = 'opacity: 30%'
        document.querySelector('sidebar').style.cssText = 'opacity: 30%'
        document.querySelector('header').style.cssText = 'opacity: 30%'
        modal.style.cssText = 'display: flex;'
        modalActive = true;
    } else if (modalActive === true) {   
        modal.style.cssText = 'display: none'
        document.querySelector('main').style.cssText = 'opacity: 100%'
        document.querySelector('sidebar').style.cssText = 'opacity: 100%'
        document.querySelector('header').style.cssText = 'opacity: 100%'
        modalActive = false;
    }
}

export {modalButton, modalFunctionality, modalSubmit, modalForm}