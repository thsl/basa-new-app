angular.module('starter.home.controlador', ["chart.js"])

    .controller("HomeController", ['$scope', '$timeout', function ($scope, $timeout) {

        // gera o gráfico
        $scope.labels = ["07/11", "08/11", "09/11", "10/11", "11/11", "12/11", "Hoje"];
        $scope.series = ['Gastos'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 81]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{yAxisID: 'y-axis-1'}];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            fontFamily: "montserrat",
                            fontSize: 10
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            fontFamily: "montserrat",
                            fontSize: 8
                        }
                    }
                ]
            }
        };


        // select com botão em grupo

        $scope.active = 'semana';
        $scope.setActive = function(type) {
            $scope.active = type;
        };
        $scope.isActive = function(type) {
            return type === $scope.active;
        };


    }]);