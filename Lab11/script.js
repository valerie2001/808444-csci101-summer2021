be_sad = function() {
    jQuery('#face_img').attr('src', 'smiley.jpg')
}

increment = function() {
  // alert("sksdklasjdklasj")
    old_width =  jQuery('#face_img').attr('width')
    console.log(old_width);
    new_width = parseInt(old_width) + 100
    jQuery('#face_img').attr('width', new_width)
}

br8 = function(){
  jQuery('#face_img').attr('class', 'border_radius_8')
}


br50 = function(){
  jQuery('#face_img').attr('class', 'border_radius_50')
}


make_invisible = function() {
    jQuery('#face_img').hide()
}
make_visible = function() {
    jQuery('#face_img').show()
}

insert_after = function() {
    jQuery('#expand').after('<i>New content</i>')
}

setup = function() {
  jQuery('#face_img').click(be_sad);
  jQuery('#inc_width').click(increment);

  jQuery('#br_8').click(br8);
  jQuery('#br_50').click(br50);

  jQuery('#show').click(make_visible);
  jQuery('#hide').click(make_invisible);


  jQuery('#after').click(insert_after);
}

jQuery(document).ready(setup)
