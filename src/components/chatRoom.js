angular.module('video-player')

  .component('chatRoom', {
    bindings: {
      comments: '<',
    },

    template: `
    <ul class="video-list">
      <message 
        ng-repeat="comment in $ctrl.comments track by $index"
        comment="comment"
      >
    </ul>
  `
  });
