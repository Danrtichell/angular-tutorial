'use strict';

/* Controllers */

/*
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        */
/*$scope.phones = [
            {'name': 'Nexus S',
             'snippet': 'Fast just got faster with Nexus S.',
             'age': 1},
            {'name': 'Motorola XOOM™ with Wi-Fi',
             'snippet': 'The Next, Next Generation tablet.',
             'age': 2},
            {'name': 'MOTOROLA XOOM™',
             'snippet': 'The Next, Next Generation tablet.',
             'age': 3}
        ];*//*


        $http.get('phones/phones.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.name = "World";

        $scope.orderProp = "age";
    }
]);*/

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    //the old way of fetching data using low level $http api
    /*function ($scope, $http) {
        $http.get('phones/phones.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
    }*/

    //the new way of fetching data using custom service
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }
]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
        //$scope.phoneId = $routeParams.phoneId;

        //the old way of fetching data using low level $http api
        /*$http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
        });*/

        $scope.phone =  Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };

        $scope.hello = function(name) {
            alert('Hello ' + (name || 'world') + '!');
        }
    }
]);