angular.module('agile')

.controller('ProjectCtrl', ['$state', function ($state){
	Project = this;

	Project.project = [];
	Project.newTag = '';
	Project.selectedTag = '';

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
}])