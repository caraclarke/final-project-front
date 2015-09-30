(function userController() {

  var UserController = function($routeParams, userFactory) {

		// var user = simpleStorage.get('userId');
		var userId = simpleStorage.get('userId'); // $routeParams.user;
    var vm = this;
    vm.user = {};

    function init() {
      userFactory.getUser(userId)
        .then(function(result) {
          vm.user = result.data;
        }, function(data, status, headers, config) {
					console.error(status);
        }); // end .then
    } // end init

    vm.logOut = function() {
      simpleStorage.flush();
      window.location.href = '#/timelineIndex';
      $('#login-button').removeClass('hide');
      $('#logout-button').addClass('hide');
      $('#profile-button').addClass('hide');
    }

    vm.delete = function() {
      userFactory.delete(vm.currentUser)
        .then(function(result) {
          console.log('destroyed');
        }, function(data, status, headers, config) {
          console.log('error DELETING a USER');
          console.error(data, status);
        });
    }; // end delete

    vm.update = function(email, firstName, lastName) {
      userFactory.update(vm.user.id, email, firstName, lastName)
        .then(function(result) {
          window.location.href = ('#/userShow');
          vm.user = result.data;
          vm.users.push(vm.user);
          vm.currentUser = {};
        }, function(data, status, headers, config) {
          console.log('error UPDATING a USER');
          console.error(data, status);
        });
    };

    $('#update-user').on('click', function() {
      $('.css-form').removeClass('hide');
    });

    init();
  }; // end UserController

	UserController.$inject = ['$routeParams', 'userFactory'];

	angular.module('internetHistoryApp').controller('userController', UserController);

})(); // end page
