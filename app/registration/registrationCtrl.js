var routerApp = angular.module('myApp');
routerApp.controller("registrationCtrl", function($scope, $state, registrationService){
	$scope.view = "registration";
	$scope.registration = {};
	$scope.errors = {};
	$scope.validateFirstname = function(){
		if(!$scope.registration.firstName)
			$scope.errors.firstName = "First name is required";
		else if($scope.registration.firstName.length > 10)
			$scope.errors.firstName = "First name should be less than 10 chars";
		
	}
	var validateForm = function(){
		$scope.errors = {};
		$scope.validateFirstname();
	}
	$scope.submit = function(){
		validateForm();
		if(Object.keys($scope.errors).length===0){
			registrationService.saveUserDetatils($scope.registration).then(function(response){
				$scope.message = "success";
			},function(){
				$scope.message = "failure"
			});
		}
			//$state.go('singleEmp');
	}
});