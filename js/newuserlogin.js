if ( document.body.classList.contains('page-new') ){

const l = document.querySelector( 'input[name="email"]');
const m = document.querySelector( 'input[name="username"]');

l.addEventListener('click', function(i){
  if(email.value){
     email.value = '';
      console.log('it works')

  }
 // console.log('it works')
})


m.addEventListener('click', function(i){
  if(username.value){
     username.value = '';
      console.log('it works')

  }
 // console.log('it works')
})

const f = document.querySelector('form');

f.addEventListener('submit', function(e){
  e.preventDefault();

  localStorage.setItem('username', username.value);
  location.href = 'index-home-new.html';
   console.log('it works')

  // console.log('it works')
})

}



if ( document.body.classList.contains('page-home') ){

    const heading = document.querySelector('h1 span');

    heading.textContent = " " + localStorage.getItem('username');
     console.log('it works')




}