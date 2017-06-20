/**
 * Created by sim_one_n_only on 5/20/17.
 */
var app = angular.module("personalPortfolio");

app.controller("navbar", ["scope", function ($scope) {

}]);

app.directive("navbar", function () {
    return {
        restrict: "AE",
        templateUrl: "navbar/navbar.html"
    }
})

