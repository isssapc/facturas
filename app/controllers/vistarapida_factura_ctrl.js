angular.module('FacturasApp').controller('VistaRapidaFacturaCtrl', ['$stateParams', 'FacturasApi',
    function ($stateParams, FacturasApi) {
        var self = this;
        self.factura={};
        self.id_factura = $stateParams.id_factura;
        
        FacturasApi.get_factura($stateParams.id_factura).then(function(response){
           self.factura=response.data; 
        },function(err){
            console.log("ha habido un error al leer la factura");
        });
        


    }]);


