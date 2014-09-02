var app = angular.module('NoteBook', []);

app.controller('BookController', function() {
    this.notes = myNotes;

});
app.directive('noteList', function() {
        return {
            restrict: 'E',
            templateUrl: "/Templates/_noteTemplate.html"
        };
});
app.controller('StripController', function() {
    this.cats = categories;
});
var categories = {
    WORK: { name: "Work", id: "0" },
    HOME: { name: "Home", id: "1" }
};
var myNotes = [
{
    header: 'TestNote1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.',
    category: categories.WORK
},
{
    header: 'TestNote2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.',
    category:categories.WORK
},
{
    header: 'TestNote3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi sit amet nisi vestibulum consequat. Nullam tempor viverra nunc id ultrices. Quisque scelerisque turpis id orci laoreet, non molestie nulla vehicula. Nullam purus odio, mollis venenatis tortor sit amet, lobortis rhoncus turpis. Ut faucibus bibendum neque, a feugiat urna. Pellentesque nisl risus, tincidunt eleifend iaculis non, commodo eget arcu. Nunc ac pretium magna, vel molestie tellus.',
    category:categories.HOME
}
];
