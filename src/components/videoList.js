angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      selectVideo: '<'
    },

    template: `
    <ul class="video-list">
      <video-list-entry 
        ng-repeat="video in $ctrl.videos"
        video="video"
        select-video="$ctrl.selectVideo"
        on-click="$ctrl.onClick"
      >
    </ul>
  `
  });
