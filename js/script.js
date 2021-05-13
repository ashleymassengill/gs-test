$(document).ready(function(event){
  $('.accHead').click(function(){
    // removes the class from any other tabs and adds class to clicked
    $(this).parent().toggleClass('open').siblings().removeClass('open');
    // closes the children of any other tabs
    $(this).parent().siblings().children('.accContent').slideUp(350);
    // opens & closes the tab just clicked
    $(this).parent().children('.accContent').slideToggle(350);
  });
 });
