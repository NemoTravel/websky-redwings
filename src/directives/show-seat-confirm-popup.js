var app = angular.module('app');


app.directive('showSeatConfirmPopup', function () {
    return {
        link: function ($scope, element, attrs) {
            init();
        }
    }
});


function init() {

    var jqueryInterval = setInterval(function () {
        if (typeof $ == "function") {
            $(document).on("click", ".js-seat-not-for-all", function () {
                var flight = $(this).attr("selected-flight"),
                    passenger = $(this).attr("selected-passenger"),
                    interval5235 = setInterval(function () {
                        if ($("#popupSeatMapConfirm-" + flight + "-" + passenger).length && $("#js-seatmap-limitation-open-popup-" + flight + "-" + passenger).length) {
                            $("#js-seatmap-limitation-open-popup-" + flight + "-" + passenger).click();
                            clearInterval(interval5235);
                        }
                    }, 500);
            });

            $(document).on("click", ".js-seatmap-limitation-button-remove", function () {
                jQuery.fancybox.close();
                $(".js-seatmap-remove-" + $(this).attr('flightNum') + "-" + $(this).attr('passengerNum')).click();
            });

            $(document).on("click", ".js-seatmap-limitation-button", function () {
                jQuery.fancybox.close();
            });

            clearInterval(jqueryInterval);
        }
    }, 100);
}