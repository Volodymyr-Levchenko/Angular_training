angular.module('NoteBook', [])
.controller('BookController', function() {
    this.notes = myNotes;
})
.directive('noteList', function() {
    return {
        restrict: 'E',
        templateUrl:"/Templates/_noteTemplate.html"
    };
});
var myNotes = [
    {
        header: 'TestNote1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.'
    },
    {
        header: 'TestNote2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.'
    },
    {
        header: 'TestNote3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.'
    }
];