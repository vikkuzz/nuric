var button = document.querySelector('.open-btn');
var leftMenu = document.querySelector('.left-side-menu');
var openMenu = document.querySelector('.left-side-menu-show');
var closeBtn = document.querySelector('.close-btn');
var hideMenu = document.querySelector('.left-side-menu-hide');

button.addEventListener('click', function(){
    leftMenu.classList.add('left-side-menu-show');
    leftMenu.classList.remove('left-side-menu-hide');
});

closeBtn.addEventListener('click', function() {
    leftMenu.classList.remove('left-side-menu-show');
    leftMenu.classList.add('left-side-menu-hide');
});


