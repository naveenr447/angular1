var routerApp = angular.module('myApp');
routerApp.factory("registrationService", function($http){
  return {
    getUserDetatils: function () {
      $http({"method" : "GET", url : 'app/mocks/user.json'})
      .then(function(data){
      	console.log(data);
      },function(){
      });
    },
    saveUserDetatils: function (data) {
      return $http({method : "GET", 
      		url : 'app/mocks/user.json', 
      		data : data,
      		headers:{"Content-Type":"application/json"}
      		 });
    }
  }
});