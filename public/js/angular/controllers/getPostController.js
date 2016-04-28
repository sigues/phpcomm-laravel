app.controller('getPostController', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state){
	$scope.posts = [];
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
	            .then(function(data, status, headers, config) {
	            	$scope.posts.push(data);
	            	$state.go('index');
	            },
	            function(response) {
	            	$scope.errorMessageShow = true;
	            	$scope.errorMessage = parseErrors(response.data.errors)
	            	console.log(response.data.errors);
	            }
	            );
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

function parseErrors(errors)
{
	var messages = '';
	$.each(errors, function(key, message){
        messages += key+": "+message;
    });
    message=messages;
    return message;
}