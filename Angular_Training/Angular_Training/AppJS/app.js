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
                redirectTo:'/notes/0'
            });

    }
]);
app.controller('NoteController', [
    '$scope','$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get('api/notes/').success(function(data) {
            $scope.notes = data;
        });
        //$scope.notes = myNotes;
        $scope.cats = $http.get('api/categories/').success(function(data) {
            $scope.cats = data;
        });
        $scope.current = fetchNote($routeParams.noteid,$scope.notes);
        $scope.fetchRespectiveNotes = function(category) {
            var i;
            var res = [];
            for (i = 0; i < cats.length; i++)
                if (cats[i].category == category)
                    res.cats(myNotes[i]);
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

//--Temporary stub till establishing integration with back-end--
var categories = {
    WORK: { name: "Work", id: "0" },
    HOME: { name: "Home", id: "1" }
};
var myNotes = [
{
    id:0,
    header: 'TestNote0',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
    category: categories.WORK
},
{
    id:1,
    header: 'TestNote1',
    text: 'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla.',
    category:categories.WORK
},
{
    id:2,
    header: 'TestNote2',
    text: 'Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod,' +
        ' purus ipsum pretium metus, in lacinia nulla nisl eget sapien.' +
        ' Donec ut est in lectus consequat consequat. Etiam eget dui. Aliquam erat volutpat.' +
        ' Sed at lorem in nunc porta tristique. Proin nec augue. Quisque aliquam tempor magna.'+
        'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, ' +
        'scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis' +
        ' eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse dapibus' +
        ' lorem pellentesque magna. Integer nulla.',
    category:categories.HOME
}
];
var fetchNote = function (id,notes) {
    var i;
    var res=null;
    for(i=0;i<notes.length;i++)
        if (notes[i].id == id)
            res = notes[i];
    return res;
}

