var app = angular.module('app', []);

app.controller('restaurantcontroller', function($scope, $http, $location) {

	var config = {
		headers : {
			'Accept' : 'application/json'
		}
	}

	$scope.getfunction = function() {
		
		$("#viewTableMode").hide();
		$("#editTableMode").hide();
		$("#uploadTable").hide();
		  $("#addDish").show();
		  $("#backDish").hide();

		var url = $location.absUrl() + "/dishes";

		$http.get(url).then(
				function(response) {
					$scope.response = response.data;
					console.log(":::::::" + $scope.response);
				},
				function error(response) {
					$scope.postResultMessage = "Error with status: "
							+ response.statusText;
				});

	}

	$scope.restaurant = {};
	$scope.submitForm = function() {
		
		
		$("#displayTable").show();
		var dishId=Number($("input[name=dishId]").val());
		$scope.restaurant.dishImageName=($("input[name=fileNameUpload]").val());
		
		if(dishId!=0)
    	{
    	 $scope.restaurant.dishId=$('input[name="dishId"]').val();
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
     	 

         $scope.restaurant = "";    
         location.reload();
    	
    	}
		else{
		var url = $location.absUrl() + "/dishes";
		$http.post(url, $scope.restaurant, config).then(
				function(response) {
					$scope.response = response.data;
					$scope.getfunction();
					console.log("insert data:" + $scope.response);

				},
				function error(response) {
					$scope.postResultMessage = "Error with status: "
							+ response.statusText;
				});
		}

	}
	
	
	 $scope.deletefunction = function(){
		 
		    var url = $location.absUrl()+"/dishes/"+this.restaurant.dishId;
		    
		    $http.delete(url).then(function (response) {
		      $scope.response = response.data;
		      console.log("Data deleted:::"+response.data);
		      $scope.getfunction();
		    }, function error(response) {
		      $scope.postResultMessage = "Error with status: " +  response.statusText;
		    });
		   
		    location.reload();
		  }
	 
	 $scope.editfunction = function(view){
		 

		  
		 $("#viewTableMode").hide();
		 $("#displayTable").hide();
		  $("#saveButton").hide();
		  $("#addDish").hide();
		  $("#backDish").show();
		 $("#uploadTable").show();
		  
		  $scope.IsDisplay= false;
		  var url = $location.absUrl()+"/dishes/"+this.restaurant.dishId;
		    
		  if(view!=true){
		    $http.get(url).then(function ($scope) {
		      $scope.response = $scope.data;
		      $('input[name="dishId"]').val($scope.response.dishId);
		      $('input[name="fileNameUpload"]').val($scope.response.dishImageName);
		      $('input[name="cuisinename"]').val($scope.response.dishImage);
			    $('input[name="indicator"]').val($scope.response.indicator);
			    $('input[name="people"]').val($scope.response.num_people);
			    $('textarea[name="ingredients"]').val($scope.response.ingredients);
			    $('textarea[name="instructions"]').val($scope.response.instructions);
			    $("#editTableMode").show();
				  $("#viewTableMode").hide();
				  $("#uploadTable").show();
				  $("#addDish").hide();
				  $("#backDish").show();
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
						  $("#addDish").hide();
						  $("#backDish").show();
						  $('img').each(function () {
							  $("#viewImageDish").attr('src', $scope.response.dishImageName);
							});
				    }, function error(response) {
				      $scope.postResultMessage = "Error with status: " +  response.statusText;
				    });
		  }
		  
		  $scope.getfunction();
		  
	 }
	 
	 $scope.addfunction = function(){
		  
		  $scope.IsDisplay= false;
		  $("#displayTable").hide();
		  $("#editTableMode").show();
		  $("#viewTableMode").hide();
		  $("#updateButton").hide();
		  $("#addDish").hide();
		  $("#backDish").show();
		  $("#uploadTable").show();
		  
		  }
	 
	 $scope.getbackfunction = function(){
		 location.reload();
		 }
	

});