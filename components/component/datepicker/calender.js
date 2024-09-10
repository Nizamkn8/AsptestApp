(function ($) {
  var $datesHighlightes = [];
  function highlightDays(date) {
    for (var i = 0; i < $datesHighlightes.length; i++) {
      if (new Date($datesHighlightes[i]).toString() == date.toString()) {
        return [true, "dp-date-td highlight"];
      }
    }
    return [true, "dp-date-td"];
  }
  function calender() {
    $datesHighlightes = [];
    $(".events-views-row").each(function () {
      $datesHighlightes.push($(this).attr("events-date"));
    });
    $(".calender-field").datepicker({
      // dateFormat: "dd/mm/yy",
      showOtherMonths: true,
      beforeShowDay: highlightDays,
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      // onSelect: function (date, inst) {
      // },
      onChangeMonthYear: function (year, month, inst) {
        if ($(".events-popup-region.is-active").length > 0) {
          $(".events-popup-region.is-active .popup-close").trigger("click");
        }
        var $rowToSHow = year + "-" + month;
        $(".calender-view .calender-views-row[data-show='" + $rowToSHow + "']")
          .addClass("is-active")
          .siblings()
          .removeClass("is-active");

        if (
          $(
            ".calender-view .calender-views-row[data-show='" + $rowToSHow + "']"
          ).length == 0
        ) {
          $(".calender-view .calender-views-row").removeClass("is-active");
        }
      },
    });
    //navigation
    $(document).on("click", ".calender-nav-next", function (e) {
      e.preventDefault();
      var $active = $(this)
        .parents(".calender-view")
        .find(".calender-views-row.is-active");
      $active.next().addClass("is-active");
      $active.removeClass("is-active");
      if (
        $(this)
          .parents(".calender-view")
          .find(".calender-views-row.is-active")
          .next().length == 0
      ) {
        $(".calender-nav-next").addClass("disabled");
      } else {
        $(".calender-nav-next").removeClass("disabled");
      }
      if (
        $(this)
          .parents(".calender-view")
          .find(".calender-views-row.is-active")
          .prev().length == 0
      ) {
        $(".calender-nav-prev").addClass("disabled");
      } else {
        $(".calender-nav-prev").removeClass("disabled");
      }
    });
    $(document).on("click", ".calender-nav-prev", function (e) {
      e.preventDefault();
      var $active = $(this)
        .parents(".calender-view")
        .find(".calender-views-row.is-active");
      $active.prev().addClass("is-active");
      $active.removeClass("is-active");
      if (
        $(this)
          .parents(".calender-view")
          .find(".calender-views-row.is-active")
          .next().length == 0
      ) {
        $(".calender-nav-next").addClass("disabled");
      } else {
        $(".calender-nav-next").removeClass("disabled");
      }
      if (
        $(this)
          .parents(".calender-view")
          .find(".calender-views-row.is-active")
          .prev().length == 0
      ) {
        $(".calender-nav-prev").addClass("disabled");
      } else {
        $(".calender-nav-prev").removeClass("disabled");
      }
    });
  }
  function eventDetailsPopup() {
    $(document).on("click", ".events-name-link", function (e) {
      e.preventDefault();
      $(this).addClass("visited-link");
      var $offsetPos = $(".calender-view").offset().left;
      if ($offsetPos < 400) {
        $(this)
          .parents(".calender-events-block")
          .addClass("section-popup-active");
      }
      $(this).parents(".calender-block").addClass("section-no-transform");
      if ($(".events-popup-region.is-active").length > 0) {
        $(".events-popup-region.is-active")
          .not(
            $(this).closest(".current-event-item").find(".events-popup-region")
          )
          .removeClass("is-active");
        $(".events-name-link.active-event").removeClass("active-event");
      }
      $(this).addClass("active-event");
      $(this)
        .closest(".current-event-item")
        .find(".events-popup-region")
        .addClass("is-active");
    });
    $(document).on("click", ".events-popup-region .popup-close", function (e) {
      e.preventDefault();
      var $self = $(this);
      $(".active-event").removeClass("active-event");
      $(this)
        .parents(".calender-events-block")
        .removeClass("section-popup-active");
      $(this).parents(".events-popup-region").removeClass("is-active");
      setTimeout(function () {
        $self.parents(".calender-block").removeClass("section-no-transform");
      }, 500);
    });
  }

  (function ($) {
    $(window).on("load", function () {
      $("body").addClass("page-loaded");
    });
  })(jQuery);
  
  $(document).ready(function () {
    calender();
    eventDetailsPopup();
  });
})(jQuery);



