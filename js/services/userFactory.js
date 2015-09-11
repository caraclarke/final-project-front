(function userFactory() {

    // create address factory
    var UserFactory = function($http) {
      var userAPI = {};
			var sa = 'https://still-dawn-2794.herokuapp.com';

			userAPI.login = function(email, password) {
				return $http.post(sa + '/login/', { 'credentials': { email: email, password: password }});
			};

			userAPI.getUser = function(userId) {
        return $http.get(sa + '/users/' + userId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };

      userAPI.create = function(user) {
        return $http.post(sa + '/users/', { user: user });
      };

      userAPI.update = function(user) {
        return $http.patch(sa + '/users/' + userId, user, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };

      userAPI.delete = function(user) {
        return $http.delete(sa + '/users/' + userId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };
      return userAPI;
    }; // end userFactory

    UserFactory.$inject = ['$http'];

    angular.module('internetHistoryApp').factory('userFactory', UserFactory);
})();
