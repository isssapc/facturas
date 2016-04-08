
angular.module('FacturasApp').controller('ProductosCtrl', ['$http', 'FacturasApi', function ($http, FacturasApi) {
        var self = this;
        self.productos = [];       
        
        
        FacturasApi.get_productos().then(function (response) {
            self.productos = response.data;
        });
   

    }]);

