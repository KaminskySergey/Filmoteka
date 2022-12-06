import { team } from "./team-arr";


const footer = document.querySelector('footer')

const teamList = document.querySelector('.footer-team__list')

let topFilm 

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
        
        console.log(el.films[0].name);
        
        el.films.map((film) => {
            console.log(film);
            const mark = topFilms(film)
            console.log(mark);
            topFilm.insertAdjacentHTML('afterbegin', mark)
        })
            
            
        
        
    }
    
    
})

}


function topFilms(el){
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
<p class="modal__films--top">Top-5 Films:</p>
    <ul class="top-films__list">
        
    </ul>
</div>

<div>
<p class="modal__actor--top">Top-5 Actors:</p>
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