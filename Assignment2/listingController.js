angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.inputListing = {
      code: "",
      name: "",
      coordinates: {},
      address: ""
    };

    $scope.addListing = function() {
      if($scope.addListingForm.$valid) {
        $scope.listings.push(angular.copy($scope.inputListing));
        $scope.listings.sort(function(first, second) {
          if(first.code < second.code) return -1;
          if(first.code > second.code) return 1;
          return 0;
        });
      }
    };

    $scope.deleteListing = function(code) {
      $scope.listings = $scope.listings.filter(function(item) {
        return item.code != code;
      });
      if($scope.detailedInfo.code == code) {
        $scope.detailedInfo = null;
      }
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };

    $scope.isUpperCaseLetter = function() {
      var key = event.keyCode;
      return ((key >= 65 && key <= 90) || key == 8);
    }
  }
]);

