/*
  1. Resetta il container delle immagini
  2. Salva un array con tutti i source delle immagini
  3. Con un ciclo inserisci 5 immagini con il source preso dall'array
  4. Alla prima immagine togli la classe hide
  5. Aggiungi l'evento click alle freccia down in modo che
    a. All'immagine corrente aggiungi la classe hide
    b. Aumenti di 1 il valore di i 
    c. Alla nuova immagine corrente togli la classe hide
  6. Aggiungi l'evento click alle freccia up in modo che
    a. All'immagine corrente aggiungi la classe hide
    b. Diminuisci di 1 il valore di i 
    c. Alla nuova immagine corrente togli la classe hide
*/

console.log();

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

  images.innerHTML += `<img class="hide" src="${imagesSource[i]}" alt="immagine 0${i}">`;

  // 4.
  const imageSelected = document.querySelector('.carousel-image img');

  if ( i === 0 ) imageSelected.classList.remove('hide');

};
