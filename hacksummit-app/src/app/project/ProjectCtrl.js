angular.module('agile')

.controller('ProjectCtrl', ['$state', '$uibModal', function ($state, $uibModal){
	Project = this;
	Project.$state = $state;

	Project.newProject = function () {
		console.log(Project.$state);
		Project.$state.go('project.new_project');
	}
}])