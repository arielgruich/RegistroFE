/*(function(){
  'use strict';
    angular.module('app', ['angularSoap'])
          .service('InsertarPeticionService', ['$soap',function($soap){
              var base_url = "http://localhost:8080/Registro/RegistroWS?wsdl";
              return {
                  InsertarPeticion: function(firstName, lastName){
                      return $soap.post(base_url,'InsertarPeticion', {firstName: firstName, lastName: lastName});
                  }
              }
          }])

})();

.controller('MainCtrl', function($scope, testService) {

  testService.InsertarPeticion($scope.firstName, $scope.lastName).then(function(response){
    $scope.response = response;
  });

})
*/
