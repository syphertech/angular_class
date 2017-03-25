(function()
{
  'use strict';

 angular.module('DIApp',[])
.controller('DIController',DIController);

function DIController($scope,$filter){
$scope.name= "Maxwell";
//$scope.age="34";
//$scope.sayHello= function(){
//  return "hello you are my friend coursera";}
//
$scope.upper=function(){
  var upCase=$filter('uppercase');
  $scope.name=upCase($scope.name);
};
}
function AnnotateMe(name ,job,blah){
  return "blah";
}
console.log(AnnotateMe.toString());
})();
