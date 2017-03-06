var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {
    var hostname = "http://192.168.1.22:1337/",
        $scope.updateButton = false;
    $scope.submit = function(){
        var  object = {
                "fname" : $scope.first_name,
                "lanme" : $scope.last_name,
                "email" : $scope.email,
                "phone"  : $scope.phone,
                "address" : $scope.address,
                "city" : $scope.city,
                "design" : $scope.design,
                "price" : $scope.price,
                "commition" : $scope.commition
            }
        console.log(object)
        var saveData = {
          "async": true,
          "crossDomain": true,
          "url": hostname+"user/create",
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "39afa1fc-1a0e-e550-73f1-74925fd367d9"
          },
          "data": object
        }

        $.ajax(saveData).done(function (response) {
          console.log("save data", response);
        });
    }

    var settings = {
      "crossDomain": true,
      "url": hostname+"user",
      "method": "GET",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "postman-token": "f5e45a87-eec3-d310-df58-f885f4c8e531"
      }
    }

    $.ajax(settings).done(function (response) {
        $scope.invetoryData = response;
        $scope.$apply();
        console.log("record : ", response)
    });

    $scope.update = function(id){
        $scope.updateButton = true;
        console.log(id);
    }

    $scope.delete = function(id){
        var deleteObj = {
          "crossDomain": true,
          "url": hostname+"user/destroy?id="+id,
          "method": "GET",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "f5e45a87-eec3-d310-df58-f885f4c8e531"
          }
        }

        $.ajax(deleteObj).done(function (response) {
            console.log("record : ", response)
            location.reload();
        });
    }
});
