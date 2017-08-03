angular.module('trivia').controller('mainCtrl', function($scope, mainSrv) {
    $scope.test = 'hello world'
    $scope.getQuestions = mainSrv.getQuestions().then(data => $scope.questions = data);
    $scope.checkAnswer = function(index, correct) {
        mainSrv.checkAnswer(index, correct);
    }
})