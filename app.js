$(document).ready(function() {
  "use strict";

  var c,
    currentScrollTop = 0,
    navbar = $(".navigation");

  $(window).scroll(function() {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
      if ($(".sub-nav").hasClass("open")) {
        $(".sub-nav").toggleClass("open");
        $(".nav-menu i").toggleClass("fa-rotate-90");
        $("body").toggleClass("padding120");
      }
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
  });
});

$(".nav-menu").click(function() {
  $(".nav-menu i").toggleClass("fa-rotate-90");
  $(".sub-nav").toggleClass("open");
  $("body").toggleClass("padding120");
});

$("#search-toggle").click(function() {
  $(".search-form").toggleClass("show");
});

$("#search-close").click(function() {
  $(".search-form").toggleClass("show");
});
// external js: isotope.pkgd.js

// init Isotope
var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows"
});
// filter functions
var filterFns = {};

// bind filter button click
$(".filters-button-group").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$(".button-group").each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function() {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});
