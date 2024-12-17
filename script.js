const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// enabling the form to switch between login and register //

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

// to show form when login button is clicked //

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

// to close the form when the close icon on the form is clicked //

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})

// dark theme script //

document.addEventListener('DOMContentLoaded', function() {
    var themeButton = document.getElementById('themeButton');
    var body = document.body;
  
    themeButton.addEventListener('click', function() {
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeButton.textContent = 'Dark Theme';
      } else {
        body.classList.add('dark-theme');
        themeButton.textContent = 'Light Theme';
      }
    });
  });