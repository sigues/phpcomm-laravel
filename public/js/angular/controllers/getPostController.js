app.controller('getPostController', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state){
	if($stateParams.postId > 0) {
		$http.get('/api/v1/posts/'+$stateParams.postId)
	        .success(function(data, status, headers, config) {
	        	$scope.post = data;
	        });
	} else {
		$http.get('/api/v1/posts')
	        .success(function(data, status, headers, config) {
	        	$scope.posts = data;
	        });
	}

	$scope.save = function(){
		if(typeof $stateParams.postId == "undefined"){
			$http.post('/api/v1/posts',$scope.post)
	            .success(function(data, status, headers, config) {
	            	$scope.posts.push(data);
	            	$state.go('index');
	            });
		} else {
			$http.put('/api/v1/posts/'+$stateParams.postId,$scope.post)
	            .success(function(data, status, headers, config) {
	            	$scope.posts.push(data);
	            	$state.go('index');
	            });
		}
	}

	$scope.delete = function(id){
		$http.delete('/api/v1/posts/'+id.postId,$scope.post)
            .success(function(data, status, headers, config) {
            	$state.go('index');
        });
	}
}]);