/*For pre-loading screen*/
var tymout;
function preLoader() {
  tymout = setTimeout(showPage, 4000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("afterScreen").style.display = "block";
}
/*Pre-loading screen's function end*/

/*Hamburger toggle-off when clicked upon*/
$( '.nav-item' ).on("click", function(){
  $('.menu').click();
});

