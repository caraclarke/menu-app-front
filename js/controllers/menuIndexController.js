(function menuIndexController() {

  var MenuIndexController = function(menuFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = 'title';
    vm.reverse = false;

    vm.menus = [];
    vm.currentEvent = {};
    vm.master = {};

    function init() {
      menuFactory.getMenus()
      .then(function(result) {
        vm.menus = result.data;
        console.log(result.data);
      }, function(data, status, headers, config) {
        console.error(status);
      });
    } // end init

    vm.doSort = function(propName) {
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    init();
  }; // end menuIndexController

    MenuIndexController.$inject = ['menuFactory', 'appSettings'];

    angular.module('menuApp').controller('menuIndexController', MenuIndexController);
  })();
