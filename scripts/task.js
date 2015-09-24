'use strict';

app.controller('TaskController', function($scope, FURL, $firebase){
    //$scope.title = "Cleaning my house";
    //$scope.whatever = "My Car is Dirty";


        var ref = new Firebase(FURL);
        var fbTasks = $firebase(ref.child('tasks')).$asArray();

    $scope.postTask = function(task){
        console.log(task);
        fbTasks.log(task);


    }

});



