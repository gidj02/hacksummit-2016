function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                var title = 'Agile | Be Agile Not Agile';
                if (toState.data && toState.data.pageTitle) title = 'Agile | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};

angular
    .module('agile')
    .directive('pageTitle', pageTitle)