angular.module('agile')

.controller('ProjectCtrl', ['$state', '$uibModal', function ($state, $uibModal){
	Project = this;

	Project.project = [];
	Project.newTag = '';

	Project.tags = [
		{tag:"Transaction", ticked:false},
		{tag:"PayPal", ticked:false},
		{tag:"Login", ticked:false},
		{tag:"Register", ticked:false},
		{tag:"Withdraw", ticked:false}
	];

	Project.addTag = function (e) {
		e.preventDefault();
		Project.tags.push({tag:Project.newTag, ticked:true});
		Project.newTag = "";
	}

	Project.submitProject = function (e) {
		e.preventDefault();
		Project.openSuggestionModal();
	}

	Project.openSuggestionModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'app/project/data_viz.html',
            controller: "ProjectDataModal as Data",
            windowClass: "animated flipInY",
            size: "lg",
            resolve: {
                data: function () {
                    return Project.project;
                }
            }
        });
    }

}])