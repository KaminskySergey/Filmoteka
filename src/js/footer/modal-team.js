import { onClickCard } from "./footer-modal-team";

const teamOpenModal = document.querySelector('.footer-team__list')

const backdropTeam = document.querySelector('.backdrop-team')

const teamCloseModal = document.querySelector('.modal-team__btn')

teamOpenModal.addEventListener('click', onTeamModalBtn)

teamCloseModal.addEventListener('click', onTeamModalClose)

backdropTeam.addEventListener('click', onTeamModalBackdrop)

function onTeamModalBtn(evt){
    if(!evt.target.closest('li')){
        return;
    }
    document.body.classList.add('show-modal-team')
    
}

function onTeamModalClose(){
    document.body.classList.remove('show-modal-team')
}

function onTeamModalBackdrop(evt){
    if(evt.target === evt.currentTarget){
        document.body.classList.remove('show-modal-team')
    }
}
