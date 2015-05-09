app.controller('MainController', function ($scope, HomeWorksFactory, ScoreFactory) {

  $scope.loaded = true;

  // $scope.categories = [
  //   'MongoDB',
  //   'Express',
  //   'Angular',
  //   'Node',
  //   ''
  // ];

  HomeWorksFactory.getHomeWorks().then(function (data) {
    //$scope.loaded = true;
    $scope.homeWorks = data;
  });

  // $scope.getCategoryCards = function (category) {
  //   //$scope.currentCategory = category;
  //   //$scope.loaded = false;
  //   FlashCardsFactory.getFlashCards(category).then(function (data) {
  //     $scope.loaded = true;
  //     $scope.flashCards = data;
  //   });
  // }

  $scope.answerQuestion = function (answer, flashCard) {
    if (!flashCard.answered) {
      flashCard.answered = true;
      flashCard.answeredCorrectly = answer.correct;
      if (answer.correct) ScoreFactory.correct++;
      else ScoreFactory.incorrect++;
    }
  }

  $scope.clickHw = function (homework) {
    //if (!homework.clicked) {
      homework.clicked = !homework.clicked;
    //}
  }
});
