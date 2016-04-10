angular.module('FacturasApp').controller('LoginCtrl', ['$state','FacturasApi', function ($state,FacturasApi) {
        var self = this;
        
        self.login=function(){
          $state.go('facturas');  
        };
       

    }]);