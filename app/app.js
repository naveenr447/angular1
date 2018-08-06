var routerApp = angular.module('myApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/registration');

    $stateProvider

        .state('registration', {
            url: '/registration',
            templateUrl: 'app/registration/registration.html',
            controller: 'registrationCtrl'
        })

        .state('empList', {
            url: '/employeeList',
            templateUrl: 'app/employeeList/employeeList.html',
            controller: 'employeeListCtrl'       
        })
			.state('singleEmp', {
			            url: '/singleEmp',
			            templateUrl: 'app/singleEmp/singleEmp.html',
			            controller: 'singleEmpCtrl'       
			        });

});

