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
.controller('AmuseScroll', function($scope,$ionicModal) {
  $scope.noMoreItemsAvailable = false;
  
  $scope.loadMore = function() {
    $scope.items.push({ id: $scope.items.length });
   
    if ( $scope.items.length == 50 ) {
      $scope.noMoreItemsAvailable = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.nav = function () {
    console.log("foo");
    //href="#preview.html"
  }
  

  $scope.items = [

    { url:'https://d13yacurqjgara.cloudfront.net/users/4988/screenshots/2269639/design-disruptors_1x.jpg' },
    { url: 'https://d13yacurqjgara.cloudfront.net/users/11867/screenshots/2249937/adventure_d1_1x.jpg' },
    { url: 'https://d13yacurqjgara.cloudfront.net/users/59947/screenshots/2269674/ship_dribble.jpg', },
    { url: 'https://d13yacurqjgara.cloudfront.net/users/380693/screenshots/2240412/cc2_1x.jpg' },
    { url: 'https://d13yacurqjgara.cloudfront.net/users/4601/screenshots/2237374/zambees_1x.jpg' },
    { title: 'https://d13yacurqjgara.cloudfront.net/users/56801/screenshots/2269695/r_astronomy_1x.jpg' },
    { title: 'https://d13yacurqjgara.cloudfront.net/users/688456/screenshots/2268954/ferrata2_1x.png' },
    { title: 'creative' }

  ];
// style="background-image: url('https://d13yacurqjgara.cloudfront.net/users/688456/screenshots/2268954/ferrata2_1x.png');"
  $ionicModal.fromTemplateUrl('preview.html', {
    scope: $scope,
    animation: 'scale-in'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(url) {
    // var tile = angular.element( document.querySelector( '#tile-image' ) );
    // tile.css("background-image" ,"url('" + url + "')"));
    //window.alert(tile);
    $scope.bgImage = "url('" + url + "')";
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
  
})

// PULL TO REFRESH
.controller('TodosCtrl', function($scope) {
  
  $scope.doRefresh = function() {
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply()
  };
  
})

// IMAGE PREVIEW IN MODAL

.controller('AmusePreview', function($scope, $ionicModal) {
  
});