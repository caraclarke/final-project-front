(function userController() {

  var UserController = function($routeParams, userFactory) {

    var userId = $routeParams.userId;
    var vm = this;
    vm.user = {};

    function init() {
      userFactory.getUser(userId)
        .then(function(result) {
          vm.user = result.data;
        }, function(data, status, headers, config) {
          console.log('Error getting USER from api');
        }); // end .then
    } // end init

    vm.delete = function() {
      userFactory.delete(vm.currentUser)
        .then(function(result) {
          console.log('destroyed');
        }, function(data, status, headers, config) {
          console.log('error DELETING a USER');
        });
    }; // end delete

    vm.update = function() {
      userFactory.update(vm.currentUser)
        .then(function(result) {
          vm.user = result.data;
          vm.users.push(vm.user);
          vm.currentUser = {};
        }, function(data, status, headers, config) {
          console.log('error UPDATING a USER');
        });
    }; //TODO put in right format

    init();
  }; // end UserController

	UserController.$inject = ['$routeParams', 'userFactory'];

	angular.module('internetHistoryApp').controller('userController', UserController);

})(); // end page
