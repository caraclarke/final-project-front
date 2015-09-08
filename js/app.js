(function internetHistoryApp() {
	var app = angular.module('internetHistoryApp', ['ngRoute', 'ngMessages']);

	app.config(function($routeProvider){
		$routeProvider
			.when('/users/userId', {
				controller: userController,
				controllerAs: userCtrl,
				templateUrl: 'js/views/userShow.html'
			}
		)
		.otherwise({ redirectTo: '/' });
	});
})();
