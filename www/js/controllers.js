angular.module('starter.controllers', [])

// ToDo Controller
.controller('ToDoListCtrl', function ($scope, $ionicModal){
  $scope.toDoListItems = [];
  $scope.showDeleteButton = false;
  // Init Modal
  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  // Open Modal
  $scope.openModal = function (){
    $scope.modal.show();
  };

  // Close Modal
  $scope.closeModal = function (){
    $scope.modal.hide();
  };

  // Clean Modal
  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });

  $scope.AddItem = function (data) {
    var length = $scope.toDoListItems.length + 1;
    $scope.toDoListItems.push({
      id: length,
      task: data.newItem,
      status: 'not done'
    });
    data.newItem = '';
    $scope.closeModal();
  };

  $scope.DeleteItem = function (data) {
    $scope.toDoListItems.push({
      id: length,
      task: data.newItem,
      status: 'not done'
    });
    data.newItem = '';
    $scope.closeModal();
  };
  // $scope.toDoListItems = [{
  //   task: 'Scuba Diving',
  //   status: 'Not Done'
  // }, {
  //   task: 'Climb Everest',
  //   status: 'Not Done'
  // }]
})

.controller('DashCtrl', function($scope) {})

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
