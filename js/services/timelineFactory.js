(function timelineFactory() {

	var TimelineFactory = function($http) {
		var eventAPI = {};
		var sa = 'https://still-dawn-2794.herokuapp.com';
    var test = 'http://localhost:3000';

		eventAPI.getEvents = function() {
      // allow access to index
      return $http.get( sa + '/events/');
    };

    eventAPI.show = function(eventId) {
      return $http.get( sa + '/events/' + eventId);
    };

		eventAPI.create = function(event) {
			return $http.post( sa + '/events/', {event: event}, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
		};

		eventAPI.update = function(eventId, title, caption, date) {
			return $http.put( sa + '/events/' + eventId, {event: {title: title, caption: caption, date: date}}, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}}); // {title: title , caption: caption, year: year}
		};

		eventAPI.delete = function(eventId) {
			return $http.delete( sa + '/events/' + eventId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
		};
		return eventAPI;
	}; // end timelineFactory

	TimelineFactory.$inject = ['$http'];

	angular.module('internetHistoryApp').factory('timelineFactory', TimelineFactory);
})();
