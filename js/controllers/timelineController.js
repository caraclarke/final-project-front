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
			timelineFactory.getEvents()
			.then(function(result) {
				vm.events = result.data.events;
				if (simpleStorage.get('token')) {
	        $('#login-button').addClass('hide');
					$('#logout-button').removeClass('hide');
					$('#profile-button').removeClass('hide');
	      } else {
	        $('#login-button').removeClass('hide');
					$('#logout-button').addClass('hide');
					$('#profile-button').addClass('hide');
	      }
	      $('#my-popover').popover()
			}, function(data, status, headers, config) {
				console.error(status);
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
