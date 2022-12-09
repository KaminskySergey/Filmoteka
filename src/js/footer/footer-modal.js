
const btnOpen = document.querySelector('.footer-btn')

const backdrop = document.querySelector('.footer-backdrop')

const btnClose = document.querySelector('.footer-modal__close')

const footerModal = document.querySelector('.footer-modal')


const body = document.querySelector('body')



btnOpen.addEventListener('click', onOpenModal)

btnClose.addEventListener('click', onCloseModal)

backdrop.addEventListener('click', onClickBackdrop)

function onOpenModal(){
document.body.classList.add('show-modal')
window.addEventListener('keydown', onCloseEscape)
}

function onCloseModal(){
    document.body.classList.remove('show-modal')
    window.removeEventListener('keydown', onCloseEscape)
}

function onClickBackdrop(evt){
    if(evt.currentTarget === evt.target){
        onCloseModal()
    }
}

function onCloseEscape(evt){
    if(body.classList.contains('show-modal-team')){
        return
    }
    if(evt.code === `Escape`){
        onCloseModal()
    }
}