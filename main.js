'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const pin = document.querySelector('.pin');
const coordinates = document.querySelector('.coordinates');

addEventListener('load', () => {
  const centerX = parseInt(window.innerWidth / 2);
  const centerY = parseInt(window.innerHeight / 2);
  const pinHeight = pin.getBoundingClientRect().height;
  const coordinatesHeight = coordinates.getBoundingClientRect().height;

  update(centerX, centerY, pinHeight, coordinatesHeight);

  addEventListener('mousemove', e => {
    const x = parseInt(e.clientX);
    const y = parseInt(e.clientY);
    update(x, y, pinHeight, coordinatesHeight);
  });

  addEventListener('click', e => {
    const x = parseInt(e.clientX);
    const y = parseInt(e.clientY);
    fix(x, y, pinHeight, coordinatesHeight);
  });
});

function update(x, y, pinHeight, coordinatesHeight) {
  horizontal.style.transform = `translateY(${y}px)`;
  vertical.style.transform = `translateX(${x}px)`;
  pin.style.transform = `translate(${x}px, ${y - pinHeight}px)`;
  coordinates.style.transform = `translate(${x}px, ${y - coordinatesHeight}px)`;
  coordinates.textContent = `(${x}, ${y})`;
}

function fix(x, y, pinHeight, coordinatesHeight) {
  const pin = document.createElement('img');
  pin.setAttribute('src', 'images/pin.png');
  pin.classList.add('pin');
  pin.style.top = `${y - pinHeight}px`;
  pin.style.left = `${x}px`;

  const coordinates = document.createElement('span');
  coordinates.classList.add('coordinates');
  coordinates.style.top = `${y - coordinatesHeight}px`;
  coordinates.style.left = `${x}px`;
  coordinates.textContent = `(${x}, ${y})`;

  document.body.append(pin, coordinates);
}
