(function(){
  'use strict';

  var app = angular.module('app', [ 'ngMaterial','angularSoap' ]);

app.config([
    '$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

})();
