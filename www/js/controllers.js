angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  console.log( 'Loaded!' )

  var tapEnabled = false; //enable tap take picture
  var dragEnabled = false; //enable preview box drag across the screen
  var toBack = false; //send preview box to the back of the webview

  var rect = {x: 0, y: 51, width: 375, height: 375};


  $scope.click = function() {
    cordova.plugins.camerapreview.startCamera(rect, 'back', tapEnabled, dragEnabled, toBack);
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
