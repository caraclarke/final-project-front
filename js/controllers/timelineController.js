(function timelineController() {

	var TimelineController = function(timelineFactory, appSettings) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'date';

		vm.events = [];
		vm.currentEvent = {};
		vm.master = {};

			function init() {
				timelineFactory.getEvents()
				.then(function(result) {
					vm.events = result.data;
				}, function(data, status, headers, config) {
					console.error(error);
					console.log('error getting events from db');
				});
			} // end init

			init();
	}; // end timelineController

		TimelineController.$inject = ['appSettings', 'timelineFactory'];

		angular.module('internetHistoryApp').controller('timelineController', TimelineController);
	})();
