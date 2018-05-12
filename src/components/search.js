angular.module('video-player')

  .component('search', {
    bindings: {
      searchResults: '<'
    },

    template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model="$ctrl.input" />
      <button class="btn" ng-click="$ctrl.searchResults($ctrl.input)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
    `
  });
