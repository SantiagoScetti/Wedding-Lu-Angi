const openModal = document.querySelector('.abrir-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');

});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');

});



/* JS DEL TEMPORIZADOR NO TOCAR*/
const $days = document.getElementById('days'),
  $hours = document.getElementById('hours'),
  $minutes = document.getElementById('minutes'),
  $seconds = document.getElementById('seconds');

const countdownDate = new Date('December 15, 2023 17:00:00').getTime();

let interval = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance >= 0) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
  } else {
    // Puedes hacer algo cuando la cuenta regresiva ha terminado, por ejemplo, detener el intervalo.
    clearInterval(interval);
  }
}, 1000);
