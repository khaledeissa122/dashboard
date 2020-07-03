$(function(){
  "use strict";
  $(".toggleSidebar").on("click", function() {
    $(".contentArea, .sidebar").toggleClass("noSidebar");
    $(".toggleSidebar").toggleClass("rotate");
  });
})