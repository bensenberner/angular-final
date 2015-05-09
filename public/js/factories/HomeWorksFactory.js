app.factory('HomeWorksFactory', function ($http) {
  return {
    getHomeWorks: function (category) {
      var queryParams = {};
      if (category)
        queryParams.category = category;
      else
        path = '/cards';
      return $http.get('/cards', {params: queryParams}).then(function (response) {
        return [
        {
          assignment: 'Test First JavaScript',
          url: 'https://github.com/bensenberner/FullstackTestFirst',
          status: 'completed'
        },
        {
          assignment: 'Flashcards Day 1',
          url: 'https://github.com/bensenberner/flashcards-day1',
          status: 'completed'
        },
          {
            assignment: 'Flashcards Day 2',
            url: 'https://github.com/bensenberner/flash-cards',
            status: 'completed'
          },
          {
            assignment: 'Flashcards Day 3',
            url: 'https://github.com/bensenberner/flash-cards',
            status: 'completed'
          }
        ];
      });
    }
  };
});
