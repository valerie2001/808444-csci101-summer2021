div = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 / operand_2;
    output = operand_1 + " / " + operand_2 + "=" + result;
    output_styled ="<span class='green_color'>" + output; + "</span>";
    jQuery('#result').html(output);


    // append the result to the 'history' paragraph
      old = jQuery('#history').html();
    jQuery('#history').html(old + output_styled + "<br>");
}

sub = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 - operand_2;
    output = operand_1 + " - " + operand_2 + "=" + result;
    output_styled ="<span class='blueish_color'>" + output; + "</span>";
    jQuery('#result').html(output);


    // append the result to the 'history' paragraph
      old = jQuery('#history').html();
      jQuery('#history').html(old + output_styled + "<br>");
}

mul = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 * operand_2;
    output = operand_1 + " * " + operand_2 + "=" + result;
    output_styled ="<span class='purple_color'>" + output; + "</span>";
    jQuery('#result').html(output);


    // append the result to the 'history' paragraph
      old = jQuery('#history').html();
        jQuery('#history').html(old + output_styled + "<br>");
}

add = function() {
    // console.log("You are in add()");
    operand_1 = parseInt(jQuery('#operand_1').val());
    // console.log("operand_1: " + operand_1);
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 + operand_2;
    // console.log("result: "+ result);
    output = operand_1 + " + " + operand_2 + "=" + result;
    output_styled ="<span class='orange_color'>" + output; + "</span>";
    jQuery('#result').html(output);


    // append the result to the 'history' paragraph
      old = jQuery('#history').html();
      jQuery('#history').html(old + output_styled + "<br>");
}

setup = function() {
  // console.log("Now we are in setup()");
  jQuery('#add').click(add);
  jQuery('#mul').click(mul);
  jQuery('#sub').click(sub);
  jQuery('#div').click(div);
  }

jQuery(document).ready(setup)
