$(document).ready(function(){
  $('.sidenav').sidenav();

  const loginForm = document.querySelector('form');
  const userName = document.querySelector('#kietId');
  const password = document.querySelector('#password');

  loginForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const user = userName.value ;
      const authString = password.value ;
      const strToEncode = user + ':' + authString + ':student' ;
      const send = btoa(strToEncode);
      
  });

});