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

    $scope.deleteListing = function(listing) {
      $scope.listings = $scope.listings.filter(function(item) {
        return item != listing;
      });
      if($scope.detailedInfo.code == listing.code) {
        $scope.detailedInfo = null;
      }
    };

    $scope.showDetails = function(listing) {
      $scope.detailedInfo = listing;
    };
  }
]);