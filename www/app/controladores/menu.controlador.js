angular.module('starter.menu.controlador', [])

.controller('MenuController', function($scope, $ionicHistory) {

    $scope.voltarMenu = function() {
        $ionicHistory.goBack();
    };
});