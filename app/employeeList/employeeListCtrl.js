var routerApp = angular.module('myApp');
routerApp.controller("employeeListCtrl", function($scope){
	$scope.view = "employeeList";
	$scope.headers = ["ID", "NAME", "DESCRIPTION"];
	$scope.data = [{"id":1, "name" : "naveen", desc:"sdf"},{"id":1, "name" : "praveen", desc:"sdf"}]
});