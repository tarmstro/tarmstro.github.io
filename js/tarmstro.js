

angular.module("tarmstro_app", [])
  .controller("MainController", function($scope){
    $scope.data = {};
    $scope.data.year = (new Date()).getFullYear();
    $scope.data.name = "Tom Armstrong";
    $scope.data.title = (new Date("2014-07-01T00:00:00.000Z")) < new Date() ? "Associate" : "Assistant";
  });
