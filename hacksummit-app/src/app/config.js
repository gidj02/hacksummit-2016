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
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: [
                                    'assets/libs/plugins/highcharts/highstocks.js',
                                    'assets/libs/plugins/highcharts/exporting.js',
                                ]
                    },
                ]);
            }
        }
    })

    .state('team', {    
        templateUrl: "assets/views/base.html",
        abstract: true,
        url: "/team",
    })
    .state('team.summary', {
        url: "/summary",
        templateUrl: "app/team/team.html",
        controller: 'TeamCtrl as Team',
        data:{
            pageTitle: "Team Summary",
        },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: [
                                    'assets/libs/plugins/highcharts/highstocks.js',
                                    'assets/libs/plugins/highcharts/exporting.js',
                                ]
                    },
                ]);
            }
        }
    })

    .state('project', {    
        templateUrl: "assets/views/base.html",
        abstract: true,
        url: "/project",
    })
    .state('project.new_project', {
        url: "/new_project",
        templateUrl: "app/project/new_project.html",
        controller: 'NewProjectCtrl as Project',
        data:{
            pageTitle: "Start New Project",
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
    .state('project.list', {
        url: "/list",
        templateUrl: "app/project/project_list.html",
        controller: 'ProjectCtrl as Project',
        data:{
            pageTitle: "Project List",
        },
    })

    .state('tools', {
        templateUrl: "assets/views/base.html",
        abstract: true,
        url: "/tools"
    })

    .state('tools.agile_board', {
            url: "/agile_board",
            templateUrl: "app/tools/agile_board/agile_board.html",
            controller: "AgileBoardCtrl as Agile",
            data: { pageTitle: 'Agile board' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.sortable',
                            files: ['assets/libs/plugins/ui-sortable/sortable.js']
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
