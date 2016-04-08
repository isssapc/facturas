
angular.module('FacturasApp').controller('NuevoProductoCtrl', ['$http', 'FacturasApi', function ($http, FacturasApi) {
        var self = this;
 
        self.producto={};    
    

        self.add_producto = function (producto) {            
            FacturasApi.add_producto(producto).then(function (response) {
                console.log("nuevo_producto", response.data);
                self.producto={};
            }, function(err){
                console.log("ha ocurrido un error al intentar agregar el producto");
            });
        };


    }]);



