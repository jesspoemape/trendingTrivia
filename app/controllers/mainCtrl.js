angular.module('trivia').controller('mainCtrl', function($scope, mainSrv) {
    $scope.modal = false;
    $scope.newQuestion = false;

    $scope.modalInfo = {
        question: '',
        animal: '',
        difficulty: 2,
        options: {},
        correct_answer: 1
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

        if (currentQ) {
                $scope.modalInfo = {
                question: currentQ.question,
                animal: currentQ.animal,
                difficulty: currentQ.difficulty,
                options: currentQ.options,
                correct_answer: currentQ.correct_answer
            }
        }
        else {
                $scope.newQuestion = true;
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
        var correctA = ($scope.modalOption1) ? $scope.modalOption1 : ($scope.modalOption2 ? $scope.modalOption2 : ($scope.modalOption3 ? $scope.modalOption3 : $scope.modalOption4))
        var newQuestion = {
            question: $scope.modalInfo.question,
            animal: $scope.modalInfo.animal,
            difficulty: $scope.modalInfo.difficulty,
            options: $scope.modalInfo.options,
            correct_answer: correctA
        }
        mainSrv.addQuestion(newQuestion).then(data => {
            $scope.questions = data;
            $scope.modal = false;
        });
    }
})