(function timelineController() {

	var TimelineController = function(timelineFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'date';
		vm.reverse = false;
		var eventId = event.id;

		vm.events = [];
		vm.currentEvent = {};
		vm.master = {};

		function init() {
			// if (simpleStorage.get('token') === undefined) {
			// 	$('.show-event').addClass('hide');
			// } else {
			// 	console.log('logged in');
			// }
			timelineFactory.getEvents()
			.then(function(result) {
				vm.events = result.data.events;
			}, function(data, status, headers, config) {
				console.error(error);
				console.log('error getting events from db');
			});
		} // end init


		vm.doSort = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};

		init();
	}; // end timelineController

		TimelineController.$inject = ['timelineFactory', 'appSettings'];

		angular.module('internetHistoryApp').controller('timelineController', TimelineController);
	})();
