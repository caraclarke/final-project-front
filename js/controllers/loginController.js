(function loginController() {

	var LoginController = function($routeParams, userFactory) {
    var vm = this;
    vm.user = {};

    function init() {} // end init

		vm.login = function(email, password) {
			userFactory.login(email, password)
			.then(function(result) {
				simpleStorage.set('token', result.data.token);
				simpleStorage.set('userId', result.data.userId);
				window.location.href = '#/userShow';
				$('#login-button').addClass('hide');
				$('#logout-button').removeClass('hide');
				$('#profile-button').removeClass('hide');
			}, function(data, status, headers, config) {
				console.error(status);
			});
		};

    init();
  }; // end LoginController

	LoginController.$inject = ['$routeParams', 'userFactory'];

	angular.module('internetHistoryApp').controller('loginController', LoginController);

})(); // end page
