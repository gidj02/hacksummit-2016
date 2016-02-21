angular.module('agile')

.controller('MainController', ['$state', function ($state){
	Main = this;

	Main.$state = $state;
}])

.controller('calCtrl', function($scope) {
    $scope.options = {
        weekOffset: 1,
        daysOfTheWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
})

.controller('gaugeCtrl', function($scope, $timeout) {
    $scope.animationTime = 10;
    $scope.value = 3200;
    $scope.maxValue = 5000;
    $scope.gaugeType = 'gauge';

    $scope.gaugeOptions = {
        lines: 12,
        // The number of lines to draw
        angle: 0,
        // The length of each line
        lineWidth: 0.4,
        // The line thickness
        pointer: {
            length: 0.75,
            // The radius of the inner circle
            strokeWidth: 0.042,
            // The rotation offset
            color: '#1D212A' // Fill color
        },
        limitMax: 'false',
        // If true, the pointer will not go past the end of the gauge
        colorStart: '#1ABC9C',
        // Colors
        colorStop: '#1ABC9C',
        // just experiment with them
        strokeColor: '#F0F3F3',
        // to see which ones work best for you
        generateGradient: true
    };
});
