(function timelineFactory() {

	var TimelineFactory = function($http) {
		var eventAPI = {};

		eventAPI.getEvents = function() {
      // allow access to index
      return $http.get('http://localhost:3000/events/');
    };

    eventAPI.showEvent = function(eventId) {
      return $http.get('http://localhost:3000/events/' + eventId);
    };

		eventAPI.create = function(event) {
			return $http.post('http://localhost:3000/events', { event: event });
		};

		eventAPI.update = function(event) {
			return $http.patch('http://localhost:3000/events' + eventId, event);
		};

		eventAPI.delete = function(event) {
			return $http.delete('http://localhost:3000/events' + eventId);
		};
		return eventAPI;
	}; // end timelineFactory

	TimelineFactory.$inject = ['$http'];

	angular.module('internetHistoryApp').factory('timelineFactory', TimelineFactory);
})();
