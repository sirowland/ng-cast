angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query) {
      return $http.get( 'https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: window.YOUTUBE_API_KEY,
          q: query,
          maxResults: '5',
          part: 'snippet',
          embeddable: 'true',
          type: 'video'
        }
      })
    };
  });


  