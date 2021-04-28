if ( document.body.classList.contains('page-returning') ){

const i = document.querySelector( 'input[name="username"]');


i.addEventListener('click', function(i){
  if(username.value){
     username.value = '';
  }
 // console.log('it works')
})

const f = document.querySelector('form');

f.addEventListener('submit', function(e){
  e.preventDefault();

  if (localStorage.getItem('username') === username.value){
      location.href = 'index-home.html';
  } else{
    alert('Try Again');
  }
  // console.log('it works')
})

}



if ( document.body.classList.contains('page-home') ){

    const heading = document.querySelector('h1 span');

    heading.textContent = " " + localStorage.getItem('username');



}