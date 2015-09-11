(function timelineFactory() {

	var TimelineFactory = function($http) {
		var eventAPI = {};

		eventAPI.getEvents = function() {
      // allow access to index
      return $http.get('http://localhost:3000/events/');
    };

    eventAPI.show = function(eventId) {
      return $http.get('http://localhost:3000/events/' + eventId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
    };

		eventAPI.create = function(event) {
			return $http.post('http://localhost:3000/events/', {event: event}, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
		};

		eventAPI.update = function(eventId, title, caption, date) {
			return $http.put('http://localhost:3000/events/' + eventId, {event: {title: title, caption: caption, date: date}}, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}}); // {title: title , caption: caption, year: year}
		};

		eventAPI.delete = function(eventId) {
			return $http.delete('http://localhost:3000/events/' + eventId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
		};
		return eventAPI;
	}; // end timelineFactory

	TimelineFactory.$inject = ['$http'];

	angular.module('internetHistoryApp').factory('timelineFactory', TimelineFactory);
})();
