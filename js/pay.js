if ( document.body.classList.contains('page-payment') ){

const f = document.querySelector( 'input[value="first"]');
const l = document.querySelector( 'input[name="last"]');
const ccv = document.querySelector( 'input[value="ccv"]');
const cc = document.querySelector( 'input[value="cc"]');
const zip = document.querySelector( 'input[name="zip"]');




f.addEventListener('click', function(i){
  if(f.value){
     f.value = '';
      console.log('it works')

  }
 // console.log('it works')
})

l.addEventListener('click', function(k){
  if(l.value){
     l.value = '';
      console.log('it works')

  }
 // console.log('it works')
})

ccv.addEventListener('click', function(w){
  if(ccv.value){
     ccv.value = '';
      console.log('it works')

  }
 // console.log('it works')
})

cc.addEventListener('click', function(w){
  if(cc.value){
     cc.value = '';
      console.log('it works')

  }
 // console.log('it works')
})

zip.addEventListener('click', function(b){
  if(zip.value){
     zip.value = '';
      console.log('it works')

  }
 // console.log('it works')
})

const fo = document.querySelector('form');

fo.addEventListener('submit', function(e){
  e.preventDefault();

  alert('Thank you for your payment, Checkout to get your order number');   console.log('it works')

  // console.log('it works')
})

}