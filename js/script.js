/*
  1. Resetta le box container di immagini e thumb
  2. Salva in un array il percorso file delle varie immagini
  3. Aggiungi immagini e thumbs all'html 
    a. Aseegna un src diverso
    b. Assegna una classe per identificare le immagini e una per identificare le thumb
  4. Raggruppa in un array tutti le immagini e in un altro tutte le thumb tramite classe comune
  5. (di default) Imposta un counter con valore 
    a. Imposta un valore massimo al counter
  6. (di default) Rendi visibile la prima immagine e attiva la prima thumb 
  7. Aggiungi l'evento click al bottone freccia down 
    a. Salva il bottone in una variabile
    b. Nascondi l'immagine e disattiva la thumb
    c. Se raggiungi l'ultima immagine ritorna alla prima, altrimenti passa all'immagine successiva
    d. Rendi visibile l'immagine e attiva la thumb
  8. Aggiungi l'evento click al bottone freccia up 
    a. Salva il bottone in una variabile
    b. Nascondi l'immagine e disattiva la thumb
    c. Se raggiungi la prima immagine ritorna all'ultima, altrimenti passa all'immagine precedente
    d. Rendi visibile l'immagine e attiva la thumb
*/


// 1.
const images = document.querySelector('.carousel-image');
const thumbs = document.querySelector('.carousel-thumb');

images.innerHTML = '';
thumbs.innerHTML = '';


// 2.
const source = [
  './img/cyberpunk.jpg',
  './img/elder-ring.webp',
  './img/genshin-impact.jpg',
  './img/last-of-us.jpg',
  './img/portal.jpg',
]


// 3.
for ( let i = 0; i < source.length; i ++ ) {

  images.innerHTML += `<img class="item hide" src="${source[i]}" alt="01">`;
  thumbs.innerHTML += `<img class="mini-item" src="${source[i]}" alt="01">`

};


// 4.
const imagesArr = document.getElementsByClassName('item');
const thumbsArr = document.getElementsByClassName('mini-item');


// 5.
let counter = 0;
const counterMax = source.length;


// 6.
imagesArr[counter].classList.remove('hide');
thumbsArr[counter].classList.add('active');


// 7.
const buttonDown = document.querySelector('.arrow-btn.down')

buttonDown.addEventListener('click', function() {
  
  imagesArr[counter].classList.add('hide');
  thumbsArr[counter].classList.remove('active');

  if ( counter === counterMax - 1 ) counter = 0;
  else counter ++;
  
  imagesArr[counter].classList.remove('hide');
  thumbsArr[counter].classList.add('active');

});


// 8.
const buttonUp = document.querySelector('.arrow-btn.up')

buttonUp.addEventListener('click', function() {

  imagesArr[counter].classList.add('hide');
  thumbsArr[counter].classList.remove('active');
  
  if ( counter === 0 ) counter = counterMax - 1;
  else counter --;

  imagesArr[counter].classList.remove('hide');
  thumbsArr[counter].classList.add('active');

});

