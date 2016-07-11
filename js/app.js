var davidApp = angular.module('davidApp',['ngRoute','pageslide-directive']);

davidApp.config(function($routeProvider,$locationProvider) {

	$routeProvider.
		when('/', {
			templateUrl : 'pages/home.html'
		}).
		when('/home', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		}).
		when('/projects', {
			templateUrl : 'pages/projects.html',
			controller  : 'mainController'
		}).
		when('/cv', {
			templateUrl : 'pages/cv.html',
			controller  : 'mainController'
		}).
		when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'mainController'
		}).
		otherwise({redirectTo: '/'});
	
	$locationProvider.html5Mode(true);
});

davidApp.controller('mainController', function($scope, $http) {

	$http.get('http://ipv4.myexternalip.com/json').then(function(result) {

		var myips = ["83.47.63.3",
					"80.34.88.13"];

		if( myips.indexOf(result.data.ip) !== -1 ) // Hide and sharp
			$scope.dvPublic = false;
		else // Show and blur
			$scope.dvPublic = true;
		console.log(result.data.ip, $scope.dvPublic);
	});
});

davidApp.controller('pageslideController', function($scope) {
	$scope.checked = false;

	$scope.toggle = function() {
		$scope.checked = !$scope.checked
	}
});