(function menuFactory() {

  var MenuFactory = function($http) {
    var menuAPI = {};
    var test = 'http://localhost:3000';

    menuAPI.getMenus = function() { return $http.get( test + '/menus/'); };

    return menuAPI;
  }; // end menuFactory

  MenuFactory.$inject = ['$http'];

  angular.module('menuApp').factory('menuFactory', MenuFactory);
})();
