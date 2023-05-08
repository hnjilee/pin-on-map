'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const pin = document.querySelector('.pin');
const coordinates = document.querySelector('.coordinates');

window.addEventListener('load', () => {
  const pinHeight = pin.getBoundingClientRect().height;
  const x = parseInt(document.documentElement.clientWidth / 2);
  const y = parseInt(document.documentElement.clientHeight / 2);
  translate(x, y, pinHeight);

  window.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    translate(x, y, pinHeight);
  });

  window.addEventListener('click', e => {
    const x = e.clientX;
    const y = e.clientY;

    const pin = document.createElement('img');
    pin.setAttribute('src', 'images/pin.png');
    pin.setAttribute('class', 'pin');
    pin.style.top = `${y - pinHeight}px`;
    pin.style.left = `${x}px`;

    const coordinates = document.createElement('span');
    coordinates.setAttribute('class', 'coordinates');
    coordinates.style.top = `${y}px`;
    coordinates.style.left = `${x}px`;
    coordinates.textContent = `(${x}px, ${y}px)`;

    document.body.append(pin, coordinates);
  });
});

function translate(x, y, pinHeight) {
  horizontal.style.transform = `translateY(${y}px)`;
  vertical.style.transform = `translateX(${x}px)`;
  pin.style.transform = `translate(${x}px, ${y - pinHeight}px)`;
  coordinates.style.transform = `translate(${x}px, ${y}px)`;
  coordinates.textContent = `(${x}px, ${y}px)`;
}
