(function menuApp() {
  var menuApp = angular.module('menuApp', ['ngRoute']);

  menuApp.config(function($routeProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        controller: 'menuIndexController',
        controllerAs: 'mIndexCtrl',
        templateUrl: 'js/views/menuIndex.html'
      })
      .otherwise({ redirectTo: '/' });
  });
})();
