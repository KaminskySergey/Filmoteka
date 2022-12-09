import { team } from "./team-arr";


const footer = document.querySelector('footer')

const teamList = document.querySelector('.footer-team__list')



const modalTeam = document.querySelector('.modal-team')
// console.log(teamItem);
teamList.addEventListener('click', onClickCard)

export function onClickCard(evt){
if(evt.target.nodeName !== 'IMG'){
    return;
}

const imgBtn = Number(evt.target.id);
modalTeam.innerHTML = '';



team.map((el) => {
    
    if(el.id === imgBtn){
        const markup = markupOne(el)
        
        modalTeam.insertAdjacentHTML('afterbegin', markup)
        
        const topFilm = document.querySelector('.top-films__list')

        const topActor = document.querySelector('.top-actor__list')
        
        
        
        el.films.map((film) => {
            fnClickTop()
            const mark = topFilms(film)
            topFilm.insertAdjacentHTML('afterbegin', mark)
        })
        el.actors.map((actor) => {
            fnClickTop()
            const markupActor = topActors(actor);
            topActor.insertAdjacentHTML('afterbegin', markupActor)
        })
            
        
        
    }
    
    
})

}


//   click  "top" =================
function fnClickTop(){
    const pTopFilmsEl = document.querySelector('.modal-films__click-js');
    const pTopActorEl = document.querySelector('.modal-actors__click-js')
    
    pTopFilmsEl.addEventListener('click', onClickTopFilms)
    pTopActorEl.addEventListener('click', onClickTopActors)
}



function onClickTopFilms(){
    const topFilmEl = document.querySelector('.top-films__list')
    console.log(topFilmEl);
    topFilmEl.classList.toggle('is-hidden')
    
}

function onClickTopActors(){
    const topActorEl = document.querySelector('.top-actor__list')
    console.log(topActorEl);
    topActorEl.classList.toggle('is-hidden')
    
}


function topFilms(el){
return `
<li class="top-films__item">
<img class="top-films__img" src="${el.imgUrl}" alt="${el.name}">
</li>`
}

function topActors(el){
    return `
<li class="top-films__item">
<img class="top-films__img" src="${el.imgUrl}" alt="${el.name}">
</li>`
}

function markupOne(el){
   return `
   <div class="modal-team__container">
   <div class="modal-team__img">
<img src="${el.img}" alt="${el.name}">
</div>

<div class="modal-team__cont--top">

<div>
<div class="modal-team__film">
<button class="modal__films--top modal-films__click-js" type="button">Top Films:</button>
    <ul class="top-films__list">
        
    </ul>
</div>

<div class="modal-team__actor">
<button class="modal__actor--top modal-actors__click-js" type="button">Top Actors:</button>
    <ul class="top-actor__list">
        <li><img href="${el.actors}"></li>
    </ul>
</div>

</div>
</div>
<div class="modal-team__name">
    <h3 class="footer-item__title">${el.name} ${el.surname}</h3>
    <p class="footer-item__work">${el.work}</p>
</div>
    `
}