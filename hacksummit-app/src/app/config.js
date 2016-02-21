angular.module('agile')

.config(['$httpProvider', '$stateProvider', '$urlRouterProvider','$ocLazyLoadProvider', 'toastrConfig',
	function ($httpProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider, toastrConfig) {
	
	$urlRouterProvider.otherwise( function($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("home.welcome");
    });
    
    $stateProvider
    .state('home', {    
        templateUrl: "assets/views/base.html",
        abstract: true,
        url: "",
    })
    .state('home.welcome', {
        url: "/home",
        templateUrl: "app/home/welcome.html",
        controller: 'HomeCtrl as Home',
        data:{
            pageTitle: "Welcome",
        },
    })

    .state('project', {    
        templateUrl: "assets/views/base.html",
        abstract: true,
        url: "/project",
    })
    .state('project.new_project', {
        url: "/new_project",
        templateUrl: "app/project/new_project.html",
        controller: 'ProjectCtrl as Project',
        data:{
            pageTitle: "Welcome",
        },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: 'isteven-multi-select',
                        files: ['assets/css/plugins/isteven-multi-select/isteven-multi-select.css','assets/libs/plugins/isteven-multi-select/isteven-multi-select.js']
                    },
                ]);
            }
        }
    })


    /* =============================================
     * AngularJS - Toastr Configuratipon
     * https://github.com/Foxandxss/angular-toastr
     * ============================================= */

    angular.extend(toastrConfig, {
        allowHtml: false,
        autoDismiss: false,
        closeButton: true,
        closeHtml: '<button>&times;</button>',
        containerId: 'toast-container',
        extendedTimeOut: 1000,
        maxOpened: 0,    
        messageClass: 'toast-message',
        newestOnTop: true,
        onHidden: null,
        onShown: null,
        positionClass: 'toast-bottom-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        progressBar: true,
        tapToDismiss: true,
        target: 'body',
        templates: {
            toast: 'directives/toast/toast.html',
            progressbar: 'directives/progressbar/progressbar.html'
        },
        timeOut: 10000,
        titleClass: 'toast-title',
        toastClass: 'toast'
    });
}])
