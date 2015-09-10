(function loginController() {

	var LoginController = function($routeParams, userFactory) {
    var vm = this;
    vm.user = {};

    function init() {
			console.log('page loaded.');
		} // end init

		vm.login = function(email, password) {
			userFactory.login(email, password)
			.then(function(data) {
				console.log(data);
				simpleStorage.set('token', data.token);
				simpleStorage.set('userId', data.user_id);
				 console.log('token');
				 console.log('userId');
				$('#login-button').addClass('hide');
				$('#logout-button').removeClass('hide');
				$('#user-profile').removeClass('hide');
			}, function(data, status, headers, config) {
				console.log('error logging in');
				console.error(status);
			});
		};

    init();
  }; // end LoginController

	LoginController.$inject = ['$routeParams', 'userFactory'];

	angular.module('internetHistoryApp').controller('loginController', LoginController);

})(); // end page
