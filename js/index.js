'use strict';

const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar--1');
const bar2 = document.querySelector('.bar--2');
const bar3 = document.querySelector('.bar--3');

const navLogo = document.querySelector('.nav__logo');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');

const showMenu = () => {
  navMenu.classList.add('show-menu');
  bar1.style.transform = 'translateY(1rem) rotate(45deg)';
  bar2.style.opacity = '0';
  bar3.style.transform = 'translateY(-1rem) rotate(-45deg)';
  document.querySelector('body').style.overflow = 'hidden';
};

const hideMenu = () => {
  navMenu.classList.remove('show-menu');
  bar1.style.transform = 'translateY(0) rotate(0)';
  bar2.style.opacity = '1';
  bar3.style.transform = 'translateY(0) rotate(0)';
  document.querySelector('body').style.overflow = 'auto';
};

navLinks.forEach(nl => nl.addEventListener('click', hideMenu));

hamburger.addEventListener('click', () => {
  if (navMenu.classList.contains('show-menu')) {
    hideMenu();
  } else showMenu();
});

navLogo.addEventListener('click', hideMenu);
