angular.module('trivia').controller('mainCtrl', function($scope, mainSrv) {

    $scope.toggle = false;
    $scope.getQuestions = mainSrv.getQuestions().then(data => $scope.questions = data);
    $scope.checkAnswer = function(index, correct) {
        var result = mainSrv.checkAnswer(index, correct);
        if (result) {
            $scope.toggle = !$scope.toggle
        }
        else {
            $scope.toggle = !$scope.toggle
        }
        
    }
})