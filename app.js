'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    

    var className = document.body.className;
    if( className == "light-theme" ) {
        this.textContent = "Light";
        document.body.classList.toggle('dark-theme')
    } else {
        this.textContent = "Dark";
        document.body.classList.toggle('light-theme')
    }

    console.log( "Current class body name: " + clasName );
});