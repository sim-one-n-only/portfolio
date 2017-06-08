/**
 * Created by sim_one_n_only on 6/7/17.
 */
var app = angular.module("personalPortfolio");

app.controller("footerController", ["$scope", function ($scope) {

}])

app.directive("footer", function () {
    return {
        restrict: "A",
        templateUrl: "footer/footer.html"
    }
})