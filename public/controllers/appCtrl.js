var app = angular.module('contactList', []);

app.controller('AppCtrl', function($scope, $http) {
    console.log("Hello world from controller")
var refresh = function() {
		$http.get('/contactList').success(function(responce){
			console.log("I GoT the data i requested");
			$scope.contactList = responce;
			$scope.contact = "";
	});
};

refresh();

$scope.addContact = function() {
	console.log($scope.contact);
	$http.post('/contactlist', $scope.contact).success(function(responce) {
		console.log(responce);
		refresh();
	});
};

$scope.remove = function(id){
	console.log(id);
	$http.delete('/contactlist/' + id).success(function(responce) {
		refresh();
	});
};

$scope.edit = function(id){
	console.log(id);
	$http.get('/contactlist/' + id).success(function(responce){
		$scope.contact = responce;
	});
};

$scope.update = function (){
	console.log($scope.contact._id);
	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(responce){
		refresh();
	});
};

$scope.deselect = function () {
	$scope.contact = "";
};


});