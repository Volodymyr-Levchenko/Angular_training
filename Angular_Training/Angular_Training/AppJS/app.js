var app = angular.module('NoteBook',
    ['ngRoute']
    );
app.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/notes/:noteid', {
                templateUrl: '/Templates/_noteTemplate.html',
                controller: 'NoteController'
            }).
            when('/map/', {
                templateUrl: '/Templates/_mapTemplate.html',
                controller:'MapController'
            }).
            otherwise({
                redirectTo:'/notes/1'
            });

    }
]);
app.controller('NoteController', [
    '$scope','$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get('api/notebook/notes/').success(function(data) {
            $scope.notes = data;
        });
        //$scope.notes = myNotes;
        $http.get('api/notebook/categories/').success(function (data) {
            $scope.cats = data;
        });
        //$scope.current = fetchNote($routeParams.noteid, $scope.notes);
        
        $http.get('api/notebook/notes/' + $routeParams.noteid).success(function (data) {
            $scope.current = data;
        });
        $scope.fetchRespectiveNotes = function(category) {
            var i;
            var res = [];
            for (i = 0; i < $scope.cats.length; i++)
                if ($scope.cats[i].category == category)
                    res = $scope.cats(myNotes[i]);
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
        templateUrl: '/Templates/_categoryListTemplate.html',
        controller: 'NoteController',
    };
});
var fetchNote = function (id,notes) {
    var i;
    var res=null;
    for(i=0;i<notes.length;i++)
        if (notes[i].id == id)
            res = notes[i];
    return res;
}

