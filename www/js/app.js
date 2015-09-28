// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('amuse', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// INFINITE SCROLL CONTROLLER
.controller('AmuseScroll', function($scope) {
  $scope.noMoreItemsAvailable = false;
  
  $scope.loadMore = function() {
    $scope.items.push({ id: $scope.items.length });
   
    if ( $scope.items.length == 50 ) {
      $scope.noMoreItemsAvailable = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
  

  $scope.items = [

    { url:'http://a3.mzstatic.com/us/r30/Purple6/v4/16/d6/36/16d6363e-cca0-e40e-9054-6d588c0db8c4/icon175x175.jpeg' },
    { title: 'amazing' },
    { title: 'inspiring', },
    { title: 'lovely' },
    { title: 'sweet' },
    { title: 'gorgeous' },
    { title: 'unique' },
    { title: 'creative' }

  ];
  
});

// PULL TO REFRESH
app.controller('TodosCtrl', function($scope) {
  
  $scope.doRefresh = function() {
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply()
  };
  
})

// IMAGE PREVIEW IN MODAL

.controller('AmusePreview', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('preview.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});