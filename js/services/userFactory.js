(function userFactory() {

    // create address factory
    var UserFactory = function($http) {
      var userAPI = {};
			var sa = 'https://still-dawn-2794.herokuapp.com';
      var test = 'http://localhost:3000';

			userAPI.login = function(email, password) {
				return $http.post(sa + '/login/', { 'credentials': { email: email, password: password }});
			};

			userAPI.getUser = function(userId) {
        return $http.get(sa + '/users/' + userId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };

      userAPI.create = function(user) {
        return $http.post(sa + '/users/', { user: user });
      };

      userAPI.update = function(userId, email, firstName, lastName) {
        return $http.put(sa + '/users/' + userId, {credentials: {email: email, firstName: firstName, lastName: lastName}}, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };

      userAPI.delete = function(userId) {
        return $http.delete(sa + '/users/' + userId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };
      return userAPI;
    }; // end userFactory

    UserFactory.$inject = ['$http'];

    angular.module('internetHistoryApp').factory('userFactory', UserFactory);
})();
