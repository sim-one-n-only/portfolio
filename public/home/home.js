/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("personalPortfolio");

app.controller("homeCntrl", ["$scope", function ($scope) {

}])

app.directive("home", function () {
    return {
        restrict: 'AE',
        templateURL: "home-page.html"
    }
})