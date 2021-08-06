multiply_by5  = function() {
  result =  5 * 3 ;
  alert("My name is " + 'Valerie' + " and the result is " + result)
  alert('hi');
}


setup = function (){
  jQuery('p').click(multiply_by5);
  // all your events are going to be listed here
}

jQuery(document).ready(setup);
