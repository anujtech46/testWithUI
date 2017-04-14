angular.module('app').controller('homeCtrl', homeCtrl);

function homeCtrl($scope) {
    console.log("homeCtrl");
    $scope.name = "homeCtrl";
}
