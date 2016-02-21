angular.module('agile')


.config(['$httpProvider', '$stateProvider', '$urlRouterProvider','$ocLazyLoadProvider',
	function ($httpProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
	
	$urlRouterProvider.otherwise( function($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("home.dashboard");
    });

    $stateProvider
    .state('home', {
        templateUrl: "assets/views/content.html",
        abstract: true,
        url: "",
    })
    .state('home.dashboard', {
        url: "/home",
        templateUrl: "app/dashboard.html",
        data:{
            pageTitle: "Welcome",
        }
    })
}])
