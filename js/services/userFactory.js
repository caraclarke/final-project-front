(function userFactory() {

    // create address factory
    var UserFactory = function($http) {
      var userAPI = {};

			userAPI.login = function(email, password) {
				return $http.post('http://localhost:3000/login/', { 'credentials': { email: email, password: password }});
			};

			userAPI.getUser = function(userId) {
        return $http.get('http://localhost:3000/users/' + userId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };

      userAPI.create = function(user) {
        return $http.post('http://localhost:3000/users/', { user: user });
      };

      userAPI.update = function(user) {
        return $http.patch('http://localhost:3000/users/' + userId, user, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };

      userAPI.delete = function(user) {
        return $http.delete('http://localhost:3000/users/' + userId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };
      return userAPI;
    }; // end userFactory

    UserFactory.$inject = ['$http'];

    angular.module('internetHistoryApp').factory('userFactory', UserFactory);
})();
