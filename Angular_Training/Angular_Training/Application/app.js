var app = angular.module('NoteBook',
    ['ngRoute']
    );
app.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/notes/:noteid', {
                templateUrl: '/Application/Views/_note.html',
                controller: 'NoteController'
            }).
            when('/map/', {
                templateUrl: '/Application/Views/_map.html',
                controller:'MapController'
            }).
            otherwise({
                redirectTo:'/notes/1'
            });

    }
]);
app.controller('NoteController', [
    '$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

        $http.get('api/notebook/notes/').success(function(data) {
            $scope.notes = data;
        });

        $http.get('api/notebook/categories/').success(function (data) {
            $scope.cats = data;
        });

        $http.get('api/notebook/notes/' + $routeParams.noteid).success(function (data) {
            $scope.current = data;
        });

        $scope.fetchNotes = function (category) {
            var res;
            $http.get('api/notebook' + category).success(function(data) {
                res = data;
            });
            return res;
        };

    }
]);
app.controller('MapController', [
    '$scope', '$routeParams', function($scope, $routeParams) {

    }
]);
app.directive('listCategory', function() {
    return {
        restrict: 'A',
        scope: {
            category: '=cat',
            display:'@'
        },
        templateUrl: '/Application/Views/_categoryList.html',
        controller: 'NoteController',
    };
});
var fetchNote = function(id, notes) {
    var i;
    var res = null;
    for (i = 0; i < notes.length; i++)
        if (notes[i].id == id)
            res = notes[i];
    return res;
};
var fetchRespectiveNotes = function (category, notes, cats) {
    var i;
    var res = [];
    for (i = 0; i < cats.length; i++)
        if (cats[i].category == category)
            res.push(notes[i]);
    return res;
};

