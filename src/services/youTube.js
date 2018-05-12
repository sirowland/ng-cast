angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query) {
      $http({
        url: 'https://www.googleapis.com/you/v3/search',
        method: 'GET',
        contentType: 'application/json',
        params: {
          'q': query,
          'maxResults': '5',
          'part': 'snippet',
          'key': window.YOUTUBE_API_KEY,
          'embeddable': 'true',
          'pageToken': ''
        }
      }).then(function success(response) {
        console.log('GET request success', response);
      }, function failure(response) {
        console.log('Failed to GET from youtube', response);
      });
    };
  });
