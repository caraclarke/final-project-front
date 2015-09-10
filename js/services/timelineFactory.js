(function timelineFactory() {

	var TimelineFactory = function($http) {
		var event = {};

		event.getEvents = function() {
      // allow access to index
      return $http.get('http://localhost:3000/events');
    };

    event.showEvent = function(eventId) {
      return $http.get('http://localhost:3000/events/' + eventId);
    };

		event.create = function(event) {
			return $http.post('http://localhost:3000/events', { event: event });
		};

		event.update = function(event) {
			return $http.patch('http://localhost:3000/events' + eventId, event);
		};

		event.delete = function(event) {
			return $http.delete('http://localhost:3000/events' + eventId);
		};
		return event;
	}; // end timelineFactory

	TimelineFactory.$inject = ['$http'];

	angular.module('internetHistoryApp').factory('timelineFactory', TimelineFactory);
})();
