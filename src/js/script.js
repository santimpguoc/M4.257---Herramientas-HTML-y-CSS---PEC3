const images = document.querySelectorAll('.carrusel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Navegar a la siguiente imagen
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Navegar a la imagen anterior
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Cambiar automáticamente cada 5 segundos
setInterval(nextImage, 5000);

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Mostrar la primera imagen al cargar
showImage(currentIndex);