/*For pre-loading screen*/
var tymout;
function preLoader() {
  tymout = setTimeout(showPage, 000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("afterScreen").style.display = "block";
}
/*Pre-loading screen's function end*/

/*function to chnage color of navbar*/
$(function () {
            $(document).scroll(function () {
                var $nav = $("#mainNavbar");
                $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
            });
        });

