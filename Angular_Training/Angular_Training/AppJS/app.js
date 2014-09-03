var app = angular.module('NoteBook',
    ['ngRoute']
    );
app.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/book/notes/:noteid', {
                templateUrl: '/Templates/_noteTemplate.html',
                controller: 'NoteController'
            }).
            otherwise({
                redirectTo:'/book/notes/0'
            });

    }
]);
app.controller('NoteController', [
    '$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.note = fetchNote($routeParams.noteid);
    }
]);
app.controller('BookController', function() {
    this.notes = myNotes;
});

//app.directive('displayNote', function() {
//    return {
//            scope: {
//              ngModel:'='  
//            },
//            restrict: 'E',
//            templateUrl: "/Templates/_noteTemplate.html",
//            controller:function() {
//                this.setModel = function(scope, note) {
//                    scope.ngModel = note;
//                    scope.$apply();
//                };
//            },
//            controllerAs:"display"
//        };
//});
app.controller('StripController', function($scope) {
    $scope.cats = categories;
    $scope.noteHeadersVisible = false;
    $scope.toggleHeaderVisibility = function (showParam) {
        $scope.noteHeadersVisible = showParam;
    };
});
var categories = {
    WORK: { name: "Work", id: "0" },
    HOME: { name: "Home", id: "1" }
};
var myNotes = [
{
    id:0,
    header: 'TestNote1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.',
    category: categories.WORK
},
{
    id:1,
    header: 'TestNote2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.',
    category:categories.WORK
},
{
    id:2,
    header: 'TestNote3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.',
    category:categories.HOME
}
];
var fetchNote = function (id) {
    var i;
    var res=null;
    for(i=0;i<myNotes.length;i++)
        if (myNotes[i].id == id)
            res = myNotes[i];
    return res;
}
