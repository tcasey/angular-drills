angular.module('app3').controller('ctrl', function ($scope, svc) {
  $scope.data = svc.getData();
});
