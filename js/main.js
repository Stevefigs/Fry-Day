if ( document.body.classList.contains('page-qty') ){

	const minus = document.querySelector( '.minus');
	const plus = document.querySelector( '.add');
	const digit = document.querySelector( '.price h3');
  
    let i = 0;
    
qty.value = i;


plus.addEventListener('click', function(){

	  i++;
  
   	 qty.value = i;
	digit.textContent = (15.99 * i);


 console.log(digit.textContent);
  
})



                
minus.addEventListener('click', function(){
  i--; 
  qty.value = i;

	digit.textContent = (15.99 / i);


})


}





