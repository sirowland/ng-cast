angular.module('video-player')
  .component('message', {
    bindings: {
      comment: '<',
    },

    template: `
    <li class="video-list-entry media">
      <div class="media-body">
        <div style="display: inline">
            <img class="comment-image" src="{{$ctrl.comment.snippet.topLevelComment.snippet.authorProfileImageUrl}}">
            <div class="comment-list-username">{{$ctrl.comment.snippet.topLevelComment.snippet.authorDisplayName}}</div>
        </div>
        <div class="comment">{{$ctrl.comment.snippet.topLevelComment.snippet.textOriginal}}</div>
      </div>
    </li>
  `,
  });