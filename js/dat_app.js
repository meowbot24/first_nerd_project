angular.module("timelineApp", []);

function timelineController($scope){

	console.log("Controller is running! :D beep bop");

}

angular
	.module("timelineApp")
	.controller("timelineController", timelineController)