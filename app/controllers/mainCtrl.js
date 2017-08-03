angular.module('trivia').controller('mainCtrl', function($scope, mainSrv) {
    $scope.modal = false;
    $scope.newQuestion = false;
    $scope.modalInfo = {
        question: '',
        animal: '',
        difficulty: 2,
        options: {}
    }

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
    $scope.openModal = function($index) {
        var currentQ = $scope.questions[$index];
        $scope.modal = true;

        $scope.modalInfo = {
            question: currentQ.question,
            animal: currentQ.animal,
            difficulty: currentQ.difficulty,
            options: currentQ.options
        }
    }
    $scope.closeModal = function() {
        $scope.modalInfo = {
        question: '',
        animal: '',
        difficulty: 2,
        options: {}
    }
        $scope.modal = false;

    }
    $scope.deleteQuestion = function() {
        var id = $scope.editQuestionInfo._id
        mainSrv.deleteQuestion(id).then(() => $scope.modal = false);
    }
    $scope.addQuestion = function() {
        $scope.modal = true;
        $scope.newQuestion = true;
    }
})