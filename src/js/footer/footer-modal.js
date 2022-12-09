
const btnOpen = document.querySelector('.footer-btn')

const backdrop = document.querySelector('.footer-backdrop')

const btnClose = document.querySelector('.footer-modal__close')

const footerModal = document.querySelector('.footer-modal')
console.log(footerModal);

const body = document.querySelector('body')
console.log(body);


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
    console.log(evt);
    if(evt.code === `Escape`){
        onCloseModal()
    }
}