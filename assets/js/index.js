var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {
    var hostname = window.location.origin+"/",
        updateId = 0;

    $scope.updateButton = false;

    $scope.submit = function() {
        var saveupdate = $("div button").attr("name");
        console.log(saveupdate);
        if (saveupdate == "update") {
            var updatedObj = {
                "fname": $scope.first_name,
                "lanme": $scope.last_name,
                "email": $scope.email,
                "phone": $scope.phone,
                "address": $scope.address,
                "city": $scope.city,
                "design": $scope.design,
                "price": $scope.price,
                "commition": $scope.commition
            }
            var updateData = {
                "async": true,
                "crossDomain": true,
                "url": hostname + "user/update/" + updateId,
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache",
                    "postman-token": "39afa1fc-1a0e-e550-73f1-74925fd367d9"
                },
                "data": updatedObj
            }

            $.ajax(updateData).done(function(response) {
                console.log("save data", response);
                // $scope.updateButton = false;
                location.reload();
            });
        } else {
            var object = {
                "fname": $scope.first_name,
                "lanme": $scope.last_name,
                "email": $scope.email,
                "phone": $scope.phone,
                "address": $scope.address,
                "city": $scope.city,
                "design": $scope.design,
                "price": $scope.price,
                "commition": $scope.commition
            }
            console.log(object)
            var saveData = {
                "async": true,
                "crossDomain": true,
                "url": hostname + "user/create",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache",
                    "postman-token": "39afa1fc-1a0e-e550-73f1-74925fd367d9"
                },
                "data": object
            }

            $.ajax(saveData).done(function(response) {
                console.log("save data", response);
                location.reload();
            });
        }
    }

    var settings = {
        "crossDomain": true,
        "url": hostname + "user",
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "f5e45a87-eec3-d310-df58-f885f4c8e531"
        }
    }

    $.ajax(settings).done(function(response) {
        $scope.invetoryData = response;
        $scope.$apply();
        console.log("record : ", response)
    });

    $scope.update = function(id) {
        $scope.updateButton = true;
        updateId = id;
        var updateObjSet = {
            "crossDomain": true,
            "url": hostname + "user/" + id,
            "method": "GET",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
                "postman-token": "f5e45a87-eec3-d310-df58-f885f4c8e531"
            }
        }

        $.ajax(updateObjSet).done(function(response) {
            $scope.first_name = response.fname;
            $scope.last_name = response.lanme;
            $scope.email = response.email;
            $scope.phone = response.phone;
            $scope.address = response.address;
            $scope.city = response.city;
            $scope.design = response.design;
            $scope.price = response.price;
            $scope.commition = response.commition;
          });
        console.log(id);
    }

    $scope.delete = function(id) {
        var deleteObj = {
            "crossDomain": true,
            "url": hostname + "user/destroy?id=" + id,
            "method": "GET",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
                "postman-token": "f5e45a87-eec3-d310-df58-f885f4c8e531"
            }
        }

        $.ajax(deleteObj).done(function(response) {
            console.log("record : ", response)
            location.reload();
        });
    }
});
