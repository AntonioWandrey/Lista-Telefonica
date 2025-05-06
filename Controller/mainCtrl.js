app.controller("helloworldCtrl", function ($scope, $stateParams) {
    
    $scope.message = "Opa World!"; 
    
    $scope.app = "Lista Telefonica"; 
       
$scope.name = $stateParams.name; 
    
})

