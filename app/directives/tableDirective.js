var routerApp = angular.module('myApp');
routerApp.directive("tableDirective", function() {
    return {
        restrict : "E",
        scope:'@',
        controller: function($scope){
        	//$scope.keys = Object.keys($scope.data[0]);
        },
        link : function($scope, element, attributes) {
       		   	 $scope.keys = Object.keys($scope.data[0]);
                  console.log($scope.keys);
        },
        template : "<table>"+
        				"<thead>"+
        					"<tr>"+
        						"<td ng-repeat='header in headers'>"+
        							"{{header}}"+
        						"</td>"+
        					"</tr>"+
        				"</thead>"+
        				"<tbody>"+
        					"<tr ng-repeat='x in data'>"+
        						"<td ng-repeat='y in keys'>"+
        							"{{x[y]}}"+
        						"</td>"+
        					"</tr>"+
        				"</tbody>"+
        			"</table>"
    };
});