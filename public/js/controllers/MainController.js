app.controller('MainController', function ($scope, HomeWorksFactory, ScoreFactory) {

  $scope.loaded = true;

  HomeWorksFactory.getHomeWorks().then(function (data) {
    $scope.homeWorks = data;
  });

  $scope.answerQuestion = function (answer, flashCard) {
    if (!flashCard.answered) {
      flashCard.answered = true;
      flashCard.answeredCorrectly = answer.correct;
      if (answer.correct) ScoreFactory.correct++;
      else ScoreFactory.incorrect++;
    }
  }

  $scope.clickHw = function (homework) {
    homework.clicked = !homework.clicked;
  }
});
