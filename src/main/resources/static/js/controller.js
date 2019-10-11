var app = angular.module('app', []);
app.controller('postcontroller', function($scope, $http, $location) {
	
  $scope.restaurant={};
  $scope.submitForm = function(){
	  
	  
	  var dishId=Number($("input[name=dishId]").val());
	  $scope.IsDisplay = true;
	  $("#addTable").show();
	  $("#backDish").show();
    var url = $location.absUrl() + "/dishes";
    
    var config = {
                headers : {
                    'Accept': 'application/json'
                }
        }
 
    
    if(dishId!=0)
    	{
    	 $scope.restaurant.dishId=$('input[name="dishId"]').val;
	     $scope.restaurant.dishImage=$('input[name="cuisinename"]').val();
		 $scope.restaurant.indicator=$('input[name="indicator"]').val();
		 $scope.restaurant.num_people=$('input[name="people"]').val();
		 $scope.restaurant.ingredients= $('textarea[name="ingredients"]').val();
		 $scope.restaurant.instructions=$('textarea[name="instructions"]').val();
		 
		   var data = {
		    		id: dishId,
		    		restaurant:JSON.stringify( $scope.restaurant)
		        };
		    
    	  var url = $location.absUrl() + "/dishes/"+ dishId;
     	 $http.put(url,  $scope.restaurant, config).then(function (response) {
     	      $scope.response = response.data;
     	    }, function error(response) {
     	      $scope.postResultMessage = "Error with status: " +  response.statusText;
     	    });
    	
    	}
    else{
    $http.post(url,  $scope.restaurant, config).then(function (response) {
      $scope.response = response.data;
    }, function error(response) {
      $scope.postResultMessage = "Error with status: " +  response.statusText;
    });
    
    $scope.successTextAlert = "Dish Added Succesfully!";
  

    // switch flag
    $scope.switchBool = function (value) {
        $scope[value] = !$scope[value];
    };
    }

    
    $scope.restaurant = "";    
    location.reload();
  }
});
 
app.controller('getcontroller', function($scope, $http, $location) {
	
	  $("#backDish").hide();
	
  $scope.getfunction = function(){
	  $scope.IsDisplay= true;
	  $("#addTable").hide();
    var url = $location.absUrl()+"/dishes";
    
    $http.get(url).then(function (response) {
      $scope.response = response.data;
    }, function error(response) {
      $scope.postResultMessage = "Error with status: " +  response.statusText;
    });
    
    
  }
  
	
$scope.getsearchfunction = function(id){
	
	  $scope.IsDisplay= true;
	  $scope.search;
		
	  $("#backDish").hide();
	  $("#addTable").hide();
	  $("#uploadButton").hide();
	  
var url = $location.absUrl()+"/dishes/search/"+$scope.search;

$http.get(url).then(function (response) {
  $scope.response = response.data;
}, function error(response) {
  $scope.postResultMessage = "Error with status: " +  response.statusText;
});

}
  
  
  $scope.deletefunction = function(){
	  $scope.IsDisplay= true;
	  $("#addTable").hide();
	  $("#uploadButton").hide();
	    var url = $location.absUrl()+"/dishes/"+this.restaurant.dishId;
	    
	    $http.delete(url).then(function (response) {
	      $scope.response = response.data;
	    }, function error(response) {
	      $scope.postResultMessage = "Error with status: " +  response.statusText;
	    });
	    
	    $scope.successTextAlert = "Dish Deleted Succesfully!";

	    // switch flag
	    $scope.switchBool = function (value) {
	        $scope[value] = !$scope[value];
	    };
	    
	    location.reload();
	    
	  }
  
  $scope.editfunction = function(view){
	  
	  $("#addTable").show();
	  $("#showTable").hide();
	  
	  $("#saveButton").hide();
	  $("#addDish").hide();
	  $("#backDish").show();
	  $("#uploadButton").show();
	  
	  $scope.IsDisplay= false;
	  var url = $location.absUrl()+"/dishes/"+this.restaurant.dishId;
	    
	  if(view!=true){
	    $http.get(url).then(function ($scope) {
	      $scope.response = $scope.data;
	      $('input[name="dishId"]').val($scope.response.dishId);
	      $('input[name="cuisinename"]').val($scope.response.dishImage);
		    $('input[name="indicator"]').val($scope.response.indicator);
		    $('input[name="people"]').val($scope.response.num_people);
		    $('textarea[name="ingredients"]').val($scope.response.ingredients);
		    $('textarea[name="instructions"]').val($scope.response.instructions);
		    $("#editTableMode").show();
			  $("#viewTableMode").hide();
	    }, function error(response) {
	      $scope.postResultMessage = "Error with status: " +  response.statusText;
	    });
	  }
	  else{
		    $http.get(url).then(function ($scope) {
			      $scope.response = $scope.data;
			      $('#dishId').text($scope.response.dishId);
			      $('#cuisinename').text($scope.response.dishImage);
			      var today = new Date($scope.response.creationDate);
			      var formattedtoday = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
			      + ' ' + today.getHours()+ ':' + today.getMinutes();
				    $('#creationDate').text(formattedtoday);
				    $('#indicator').text($scope.response.indicator);
				    $('#people').text($scope.response.num_people);
				    var getContent=$scope.response.ingredients.split(',');
				    var list = '<ul>';
				    $(getContent ).each(function(kgetContentey,value){
				        list += '<li>'+ value +'</li>';
				        });

				    list += '</ul>';
				    $('#ingredients').html(list);
				    $('#instructions').text($scope.response.instructions);
				    $("#editTableMode").hide();
					  $("#viewTableMode").show();
					  $("#uploadButton").hide();
			    }, function error(response) {
			      $scope.postResultMessage = "Error with status: " +  response.statusText;
			    });
	  }
	  
	  $scope.successTextAlert = "Dish Updated Succesfully!";

	    // switch flag
	    $scope.switchBool = function (value) {
	        $scope[value] = !$scope[value];
	    };
	    
	   
	    
	  }
  
 $scope.addfunction = function(){
	  
	  $scope.IsDisplay= false;
	  $("#addTable").show();
	  $("#showTable").hide();
	  $("#editTableMode").show();
	  $("#viewTableMode").hide();
	  $("#updateButton").hide();
	  $("#addDish").hide();
	  $("#backDish").show();
	  $("#uploadButton").show();
	  
	  }
 
 $scope.getbackfunction = function(){
 location.reload();
 }
 
});

app.controller('getSearchcontroller', function($scope, $http, $location) {
	

});


app.directive('confirmClick', function ($window) {
	  var i = 0;
	  return {
	    restrict: 'A',
	    priority:  1,
	    compile: function (tElem, tAttrs) {
	      var fn = '$$confirmClick' + i++,
	          _ngClick = tAttrs.ngClick;
	      tAttrs.ngClick = fn + '($event)';

	      return function (scope, elem, attrs) {
	        var confirmMsg = attrs.confirmClick || 'Are you sure?';

	        scope[fn] = function (event) {
	          if($window.confirm(confirmMsg)) {
	            scope.$eval(_ngClick, {$event: event});
	          }
	        };
	      };
	    }
	  };
	});

app.directive('fileModel', function ($parse) {
    return {
        restrict: 'A', //the directive can be used as an attribute only

        /*
         link is a function that defines functionality of directive
         scope: scope associated with the element
         element: element on which this directive used
         attrs: key value pair of element attributes
         */
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function() {
               scope.$apply(function() {
                  modelSetter(scope, element[0].files[0]);
               });
            });
         }
    };
});

app.controller('FileUploadController', function ($scope, fileUploadService) {
	 
    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var uploadUrl = "/imageUpload", //Url of webservice/api/server
            promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

        promise.then(function (response) {
            $scope.serverResponse = response;
        }, function () {
            $scope.serverResponse = 'An error has occurred';
        })
    };
});

app.service('fileUploadService', function ($http, $q) {
	 
    this.uploadFileToUrl = function (file, uploadUrl) {
        //FormData, object of key/value pair for form fields and values
        var fileFormData = new FormData();
        fileFormData.append('file', file);

        var deffered = $q.defer();
        $http.post(uploadUrl, fileFormData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}

        }).then(function successCallback (response) {
            deffered.resolve(response);

        },function errorCallback (response) {
            deffered.reject(response);
        });

        return deffered.promise;
    }
});
