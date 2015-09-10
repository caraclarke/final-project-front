(function internetHistoryApp() {
	var internetHistoryApp = angular.module('internetHistoryApp', ['ngRoute']); // , 'ngMessages'
	// var userController = internetHistoryApp.controller('userController');
	// var timelineController = internetHistoryApp.controller('timelineController');

	internetHistoryApp.config(function($routeProvider, $httpProvider) {
		$httpProvider.defaults.withCredentials = true;
		$routeProvider
			.when('/', {
				controller: 'timelineController',
				controllerAs: 'tIndexCtrl',
				templateUrl: 'js/views/timelineIndex.html'
			})
			.when('/loginPage', {
				controller: 'loginController',
				controllerAs: 'loginCtrl',
				templateUrl: 'js/views/loginPage.html'
			})
			.when('/userShow/', {
				controller: 'userController',
				controllerAs: 'userCtrl',
				templateUrl: 'js/views/userShow.html'
			})
		.otherwise({ redirectTo: '/' });
	});
})();
