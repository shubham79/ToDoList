
var app = angular.module( 'myApp', [] );

app.directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
    link: function ( $scope, element, attrs ) {
     var inputElement = angular.element( element.children()[1] );
     element.addClass( 'edit-in-place' );
     $scope.edit = function () {
        $scope.editing = true;
        element.addClass( 'active' );
        inputElement[0].focus();
     };
      
      
     inputElement.prop( 'onblur', function() {
        $scope.editing = false;
        element.removeClass( 'active' );
     });
    }
  };
});

app.controller('TodoCtrl', function ( $scope ) {
  $scope.todos = [
    {text:'Task1', done:false},         
    {text: 'Task2', done:false}
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
  
    $scope.clearCompleted = function () {
		
        for(var i=0; i<$scope.todos.length ; i++)
		{
			if($scope.todos[i].done === true)
			{
				
				$scope.todos.splice(i,1);
			}
		}
		// console.log($scope.todos);
	};
});
