app = angular.module('postsApp', ['ui.router', 'angular-loading-bar'], function(){

});

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/index");
	var viewBasePath = '/js/angular/views/';

	$stateProvider
		.state('index', {
			url: '/index',
			templateUrl: viewBasePath+'index.html',
			controller: 'getPostController'
		})
		.state('edit', {
			url: '/edit/:postId',
			params : { postId: null },
			templateUrl: viewBasePath+'edit.html',
			controller: 'getPostController'
		})
		.state('new', {
			url: '/new',
			templateUrl: viewBasePath+'edit.html',
			controller: 'getPostController'
		})

});