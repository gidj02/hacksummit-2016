angular.module('agile')

.controller('ProjectCtrl', ['$state', function ($state){
	Project = this;

	this.$state = $state;
	Project.project = [];
	Project.newTag = '';

	Project.tags = [
		{tag:"gino", ticked:false},
		{ tag:"ben", ticked:false},
		{ tag:"asdas", ticked:false},
		{tag:"asd", ticked:false},
		{tag:"ginaso", ticked:false}
	];

	Project.addTag = function (e) {
		e.preventDefault();
		Project.tags.push({tag:Project.newTag, ticked:true});
		Project.newTag = "";
	}
}])