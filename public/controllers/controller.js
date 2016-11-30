var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http) {
    //if this shows up in page source in browser, this shows controller is connected to html file
    console.log("Hello World from controller");

    var refresh = function(){
      $http.get('/resume').success(function(response){
          console.log("Got data!");
          $scope.resume = response;
        });
    };
    refresh();


}]);
