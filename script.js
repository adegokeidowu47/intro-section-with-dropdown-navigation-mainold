
const aside = document.querySelector('#menu');
       asideClose = document.querySelector('.close');
       asideBar = document.querySelector('.aside_bar');


aside.addEventListener('click', () =>{
  asideBar.classList.add('sideBarclose');
});

asideClose.addEventListener('click', () =>{
  asideBar.classList.remove('sideBarclose');
});
