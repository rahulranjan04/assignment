/**
 * 
 */
app.controller('FileUploadController', function ($scope, fileUploadService) {
	 
    $scope.uploadFile = function () {
        var file = $scope.myFile;
        $("#fileNameUpload").val("images/"+file.name);
        var uploadUrl = "/imageUpload", // Url of webservice/api/server
            promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

        promise.then(function (response) {
            $scope.serverResponse = response;
            console.log("FIle uploaded");
            $("#process_img").attr('src', "images/"+file.name);
            $scope.successTextAlert="File Uploaded Successfully";
  		    $scope.showSuccessAlert = true;

  		    $scope.switchBool = function (value) {
  		        $scope[value] = !$scope[value];
  		    };
            
        }, function () {
            $scope.serverResponse = 'An error has occurred';
        })
    };
});