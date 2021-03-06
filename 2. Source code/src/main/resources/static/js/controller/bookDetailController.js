var app = angular.module('myApp');
app.controller('bookDetailController', function($scope,$http, $routeParams, $rootScope) {
	$http({
		method: 'get',
		url: "http://localhost:9000/LMS/book/get/"+$routeParams.id
	}).success(function(data) {
		$scope.bookDetail=data;
		$scope.index=$scope.bookDetail.bookCategoryDetail.categoryId;
		getData();
	})
	function getData() { 
		$http({
			method: 'get',
			url: "http://localhost:9000/LMS/category/get/"+$scope.index
		}).success(function(dataBook){
			$scope.bookRelation = dataBook;	
		})
		.error(function(data, status, headers, config){});
	}
});