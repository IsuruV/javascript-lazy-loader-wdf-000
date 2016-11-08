$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  $('button#load-cars').on('click',function(){
    fetchJSON();
  })
});
