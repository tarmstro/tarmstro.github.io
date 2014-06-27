

angular.module("tarmstro_app", [])
  .controller("MainController", function($scope){
    $scope.data = {};
    $scope.data.year = (new Date()).getFullYear();
    $scope.data.name = "Tom Armstrong";
    $scope.data.title = (new Date("2014-07-01T00:00:00.000Z")) < new Date() ? "Associate" : "Assistant";
  })
  .controller("PubController", function($scope){
    angular.forEach(publications, function(value, key) {
      var pub = "<tr>";
      if (value["doi"] != '')
        pub += "<th><a href='http://dx.doi.org/" + value["doi"] + "'>" + value["title"] + "</a></th>";
      else
        pub += "<th>" + value["title"] + "</th>";
      pub += "<th>" + value["friendly_author"] + "</th>";
      pub += "<th>" + value["booktitle"] + "</th>";
      pub += "<th>" + value["year"] + "</th>";
      pub += "</tr>";
      $('#pubs').append(pub);
    });
  })
  .controller("WellController", function($scope){
    $scope.section = "bio";
    $scope.changeView = function(view){
      $scope.section = view;
    };
  });
