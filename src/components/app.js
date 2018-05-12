angular.module('video-player')

  .component('app', {
    template: `
    <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search search-results="$ctrl.searchResults">
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player current-video="$ctrl.currentVideo">
        </div>
        <div class="col-md-5">
          <video-list 
            videos="$ctrl.videos"
            select-video="$ctrl.selectVideo"
          >
        </div>
      <div>
    </div>`,

    controller: function(youTube) {  
    
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };

      var context = this;

      this.searchResults = (query) => {
        youTube.search(query)
               .then(function success(response) {
                  console.log('GET request success', response);
                  context.currentVideo = response.data.items[0];
                  context.videos = response.data.items;
                }, function failure(response) {
                  console.log('Failed to GET from youtube', response);
                  return response;
               });
      };

      this.searchResults('Alton Brown');
    }
  });
