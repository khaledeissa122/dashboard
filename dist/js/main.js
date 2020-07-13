$(function () {
  "use strict";
  $("#myDatePicker").datetimepicker({
    language: "en",
  });
  $(window).on("load", function () {
    $(".prevm i").removeClass("icon-datepicker-prev");
    $(".prevm i").addClass("fas fa-angle-left");
    $(".nextm i").removeClass("icon-datepicker-next");
    $(".nextm i").addClass("fas fa-angle-right");
  });
 
 
  // function to(){
  //   if ($(window).width() >= 1200) {
  //     console.log("dfdf")
  //     $(".toggleSidebar").on("click", function () {
  //       $(".contentArea, .sidebar").toggleClass("noSidebar");
  //       $(".toggleSidebar").toggleClass("rotate");
  //     });
  //   } 
  // }
  $(".toggleSidebar").on("click", function () {
    $(".contentArea, .sidebar").toggleClass("noSidebar");
    $(".toggleSidebar").toggleClass("rotate");
  });
  

  $(".smallToggle").on("click", function () {
    $(".sidebar").toggleClass("stritch");
    $(".smallToggle").toggleClass("rotate");
  });

  // $(window).on("load resize", function(){
  //   if ($(window).width() >= 1200) {
  //     console.log("resizing~!!sdssss!!!!",$(window).width())
      
  //   } else {
  //     $(".toggleSidebar").on("click", function () {
  //       console.log("in if con",$(window).width())
  //       $(".sidebar").toggleClass("stritch");
  //       // $(".toggleSidebar").toggleClass("rotate");
  //     });
  //   }
  // });
  var dark = "#20c997";
  var ctx = $("#myChart");
  var ctx2 = $("#myPieChart");

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontColor: dark,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: dark,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: dark,
            },
          },
        ],
      },
    },
  });

  var myPieChart = new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontColor: dark,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: dark,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: dark,
            },
          },
        ],
      },
    },
  });
 

  $(".toggleList").on("click", function () {
    $(this).find(".fa-angle-down").toggleClass("up");
    $(this).next(".chiledLinks").slideToggle();
  });

 

  $(".toggle-settings").on("click", function () {
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-settings");
  });
  var themesClasses = [];
  $("#chk").change(function () {
    if ($(this.checked)) {
      $("body").toggleClass("dark-theme");
    }
  });
  // $(".color-options li").on("click", function() {
  //   $(this)
  //     .addClass("active")
  //     .siblings()
  //     .removeClass("active");
  //   $("body")
  //     .removeClass(themesClasses.join(" "))
  //     .addClass($(this).data("theme"));
  // });
});
