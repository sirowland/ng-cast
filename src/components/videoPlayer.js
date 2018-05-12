angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      currentVideo: '<'
    },

    template: `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="{{$ctrl.url}}" allowFullScreen></iframe>
      </div>
      <div class="video-player-details">
        <h3>{{$ctrl.currentVideo.snippet.title}}</h3>
        <div>{{$ctrl.currentVideo.snippet.description}}</div>
      </div>
    </div>
  `,
  
    controller: function() {
      this.$onInit = function () {
        if (this.currentVideo) {
          this.url = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
        }
      };

      this.$onChanges = function () {
        if (this.currentVideo) {
          this.url = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
        }
      };        
    }
  });
