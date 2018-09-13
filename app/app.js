'use strict';
function ComponentController ($scope, $element, $attrs, chatService){
    $scope.textMsg = "";
    $scope.addFromCompCtrl = function(){
        chatService.addArrayMsg($scope.textMsg);
        $scope.getArrayFromCtrl();
    };
    $scope.getArrayFromCtrl = function () {
        return chatService.getMsgText();
    };
return 0;
}

var myChat = angular.module('myChat', []);
myChat.service('chatService', function () {
    this.msgText = "";
    this.arrayMsg = [];
    var self = this;
    this.addArrayMsg = function (text) {
        self.arrayMsg.push({subj: text});
    };
    this.getMsgText = function () {
        return self.arrayMsg;
    };
});
myChat.component('chatWindow1', {
    templateUrl: '/components/chatWindow.html',
    controller: ComponentController

});

myChat.component('msgWindow', {
    templateUrl: '/components/msgWindow.html',
    controller: ComponentController

});
myChat.component('inputWindow', {
    templateUrl: '/components/inputWindow.html',
    controller: ComponentController
});
myChat.component('message', {
    templateUrl: '/components/message.html',
    controller: ComponentController

});
myChat.component('contactWindow', {
    templateUrl: '/components/contactWindow.html',
    controller: ComponentController
});
myChat.component('contact', {
    templateUrl: '/components/contact.html',
    controller: ComponentController
});
