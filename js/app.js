(function internetHistoryApp() {
	var internetHistoryApp = angular.module('internetHistoryApp', ['ngRoute']); // , 'ngMessages'
	// var userController = internetHistoryApp.controller('userController');
	// var timelineController = internetHistoryApp.controller('timelineController');

	internetHistoryApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'timelineController',
				controllerAs: 'tIndexCtrl',
				templateUrl: 'js/views/timelineIndex.html'
			})
			.when('/users/userId', {
				controller: 'userController',
				controllerAs: 'userCtrl',
				templateUrl: 'js/views/userShow.html'
			})
		.otherwise({ redirectTo: '/' });
	});
})();
