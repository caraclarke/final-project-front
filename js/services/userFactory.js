(function userFactory() {

    // create address factory
    var userFactory = function($http) {
      var userAPI = {};

      userAPI.getPerson = function(userId) {
        return $http.get('http://localhost:3000/users/' + userId);
      };

      userAPI.create = function(user) {
        return $http.post('http://localhost:3000/users', { user: user });
      };

      userAPI.update = function(user) {
        return $http.patch('http://localhost:3000/users' + userId, user);
      };

      userAPI.delete = function(user) {
        return $http.delete('http://localhost:3000/users' + userId);
      };
      return userAPI;
    }; // end userFactory

    userFactory.$inject = ['$http'];

    angular.module('internetHistoryApp').factory('userFactory', userFactory);
})();
