/*
  1. Resetta il container delle immagini
  2. Salva un array con tutti i source delle immagini
  3. Con un ciclo inserisci 5 immagini con il source preso dall'array e la classe item
  4. Crea un array di tutti gli elementi con classe item
  5. Rendi visibile il primo elemento dell'array 
  6. Salva i bottoni up and down in variabili 
  7. Aggiungi l'evento click alle freccia down in modo che
    a. All'immagine corrente aggiungi la classe hide
    b. Aumenti di 1 il valore di i 
    c. Alla nuova immagine corrente togli la classe hide
  8. Aggiungi l'evento click alle freccia up in modo che
    a. All'immagine corrente aggiungi la classe hide
    b. Diminuisci di 1 il valore di i 
    c. Alla nuova immagine corrente togli la classe hide

  9. Riparti da 0 con il ciclo del bottone down quando arrivi all'ultima immagine
  10. Riparti dall'ultima immagine con il ciclo del bottone up quanda torni alla prima immagine
*/


// 1.
const images = document.querySelector('.carousel-image');
images.innerHTML = '';

// 2.
const imagesSource = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
]

// 3.
for ( let i = 0; i < 5; i++ ) {
  images.innerHTML += `<img class="hide item" src="${imagesSource[i]}" alt="immagine 0${i}">`;
};

// 4.
const imageCollection = document.getElementsByClassName('item');
const lengthColl = imageCollection.length;

// 5.
let counterImage = 0;
imageCollection[counterImage].classList.remove('hide');

// 6.
const buttonUp = document.querySelector('.arrow-btn.up');
const buttonDown = document.querySelector('.arrow-btn.down');

// 7.
buttonDown.addEventListener('click', function() {
  
  imageCollection[counterImage].classList.add('hide');

  // 9.
  if ( counterImage === lengthColl - 1 ) counterImage = 0;
  else counterImage ++;

  imageCollection[counterImage].classList.remove('hide');
  
  console.log(counterImage);  // console

});

// 8.
buttonUp.addEventListener('click', function() {

  imageCollection[counterImage].classList.add('hide');

  // 10.
  if ( counterImage === 0 ) counterImage = lengthColl - 1;
  else counterImage --;

  imageCollection[counterImage].classList.remove('hide');

  console.log(counterImage);  // console

});




