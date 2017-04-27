/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("personalPortfolio");

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
        templateUrl: "home/home-page.html",
        controller: "homeCntrl",
    })

        .when("/aboutMe", {
            templateUrl: "about-me/background.html",
            controller: "aboutMeCntrl",
    })

        .when("/projects", {
            templateUrl:"projects/projects.html",
            controller: "projectsCntrl",
        })

        .when("/contactMe", {
            templateUrl: "contact-me/contact-info.html",
            controller: "contactMeCntrl"
        })

        .otherwise({
            redirectTo: "/home"
        })
}])