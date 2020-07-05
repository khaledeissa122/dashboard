$(function () {
  "use strict";
  $(".toggleSidebar").on("click", function () {
    $(".contentArea, .sidebar").toggleClass("noSidebar");
    $(".toggleSidebar").toggleClass("rotate");
  });

  $(".toggleList").on("click", function () {
    $(this).find(".fa-angle-down").toggleClass("up");
    $(this).next(".chiledLinks").slideToggle();
  });

  $(".megaMenu").hover(function () {
    if(!$(".insideMega").hasClass("show")){
      $(".toggleName").show("slide");
      $(".megaMenu").mouseleave(function () {
        $(".toggleName").hide("slide");
      });
    }
  });

  $(".toggle-settings").on("click", function() {
    $(this)
      .find("i")
      .toggleClass("fa-spin");
    $(this)
      .parent()
      .toggleClass("hide-settings");
  });
  var themesClasses = [];
  $(".color-options li").each(function() {
    themesClasses.push($(this).data("theme"));
  });
  $(".color-options li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $("body")
      .removeClass(themesClasses.join(" "))
      .addClass($(this).data("theme"));
  });

});
