angular.module('trivia').service('mainSrv', function($http) {
    this.getQuestions = function() {
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions').then(res => res.data).catch(console.error, 'Error');
    }
    this.checkAnswer = function(index, correct) {
        if (index === correct) {
            return true;
        }
        else {
            return false;
        }
    }
    this.deleteQuestion = function(id) {
        return $http.delete(`https://practiceapi.devmountain.com/api/trivia/questions/${id}`)
        .then(res => getQuestions()).catch(console.error, 'Error');
    }
    this.addQuestion = function(newQuestionObj) {
        return $http.post('https://practiceapi.devmountain.com/api/trivia/questions', newQuestionObj)
        .then(res => res.data).catch(console.error, 'Error');
    }
})