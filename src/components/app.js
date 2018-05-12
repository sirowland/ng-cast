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
      <div class="row">
        <div class="chat-room">
          <h3>Comments</h3>
          <chat-room
            class="chat-room"
            comments="$ctrl.comments"
          >
        </div>
      </div>
    </div>`,

    controller: function(youTube) {  

      this.selectVideo = (video) => {
        this.currentVideo = video;
        this.commentGet(video.id.videoId);
      };

      var context = this;

      this.searchResults = (query) => {
        youTube.search(query)
          .then(function success(response) {
            console.log('GET request success', response);
            context.currentVideo = response.data.items[0];
            context.videos = response.data.items;
            context.commentGet(context.currentVideo.id.videoId);
          }, function failure(response) {
            console.log('Failed to GET from youtube', response);
            return response;
          });
      };

      this.commentGet = (videoId) => {
        console.log(videoId);
        youTube.getComments(videoId)
          .then(function success(response) {
            console.log('GET request success', response);
            context.comments = response.data.items;
            context.currentComments = response.data.items[0];
          }, function failure(response) {
            console.log('Failed to GET from youtube', response);
            return response;
          });
      };

      this.searchResults('Alton Brown');
    }
  });
