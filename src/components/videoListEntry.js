angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    selectVideo: '<'
  },

  template: `
    <li class="video-list-entry media">
      <div class="media-left">
        <img class="media-object" ng-src={{$ctrl.video.snippet.thumbnails.default.url}} />
      </div>
      <div class="media-body">
        <div class="video-list-entry-title" ng-click="$ctrl.selectVideo($ctrl.video)" >{{$ctrl.video.snippet.title}}</div>
        <div class="video-list-entry-detail">{{$ctrl.video.snippet.description}}</div>
      </div>
    </li>
  `
});

// $ctrl.selectVideo($ctrl.video)