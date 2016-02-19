angular.module('apiApp').service('swSvc', function($q, $http) {
  var baseUrl = "http://swapi.co/api/";

  this.getStarships = function() {
    var later = $q.defer();
    //promise 1


    //promise2
    $http({
      method: 'GET',
      url: baseUrl + "starships/"
    }).then(function(response) {
      later.resolve(response.data);
    })




    return later.promise;
  }
})
