angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('/api/listings');
      },

      create: function(listing) {
        return $http.post('/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('/api/listings/' + id);
      }
    };

    return methods;
  }
]);