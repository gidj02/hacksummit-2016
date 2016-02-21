angular.module('agile')

.controller('HomeCtrl', ['$state', function ($state){
	Home = this;

	this.$state = $state;

}])