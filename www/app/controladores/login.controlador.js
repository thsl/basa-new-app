angular.module('starter.login.controlador', [])

    .controller('LoginController', function ($scope, $ionicModal, $state) {

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            hardwareBackButtonClose: false,
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.createContact = function (u) {
            $scope.contacts.push({name: u.firstName + ' ' + u.lastName});
            $scope.modal.hide();
        };

        $scope.login = function() {
            $scope.modal.hide();
            $state.go('menu.home');
        }

    });