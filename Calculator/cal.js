div = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 / operand_2;
    jQuery('#result').html(result);
}

sub = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 - operand_2;
    jQuery('#result').html(result);
}

mul = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 * operand_2;
    jQuery('#result').html(result);
}

add = function() {
    // console.log("You are in add()");
    operand_1 = parseInt(jQuery('#operand_1').val());
    // console.log("operand_1: " + operand_1);
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 + operand_2;
    // console.log("result: "+ result);
    jQuery('#result').html(result);
}

setup = function() {
  // console.log("Now we are in setup()");
  jQuery('#add').click(add);
  jQuery('#mul').click(mul);
  jQuery('#sub').click(sub);
  jQuery('#div').click(div);
  }
jQuery(document).ready(setup)
