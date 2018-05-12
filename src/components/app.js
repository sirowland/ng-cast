angular.module('video-player')

.component('app', {
  template: `
    <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search>
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

  controller: function($scope) {  
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = function(){};
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  }
});
