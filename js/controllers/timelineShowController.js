(function timelineShowController() {

	var TimelineShowController = function(timelineFactory, appSettings, $routeParams) {
		var vm = this;
		vm.appSettings = appSettings;
		vm.sortBy = 'date';
		var eventId = $routeParams.eventId;

		vm.events = [];
		// vm.currentEvent = {};
		vm.master = {};

		function init() {
			timelineFactory.show(eventId)
			.then(function(result) {
				vm.master = result.data;
			}, function(data, status, headers, config) {
				console.error(data, status);
			});
		} // end init

		vm.update = function(title, caption, year) { // title, caption, year
			timelineFactory.update(vm.master.id, title, caption, year)
			.then(function(result) {
				vm.master = result.events;
				vm.events.push(vm.master);
				window.location.href = ('#/');
			}, function(data, status, headers, config) {
				console.error(data, status);
			});
		};

		$('#update-event').on('click', function() {
				$('.css-form').removeClass('hide');
		});

		vm.delete = function(eventId) {
			timelineFactory.delete(eventId)
			.then(function(result) {
				console.log('destroyed');
				//window.location.href = '#/';
			}, function(data, status, headers, config) {
				console.error(data, status);
			});
		}; // end deleteEvent

		init();
	}; // end timelineShowController

		TimelineShowController.$inject = ['timelineFactory', 'appSettings', '$routeParams'];

		angular.module('internetHistoryApp').controller('timelineShowController', TimelineShowController);
	})();
