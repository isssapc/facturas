angular.module('FacturasApp').controller('FacturasCtrl', ['$state', 'FacturasApi', function ($state, FacturasApi) {
        var self = this;
        self.facturas = [];

        FacturasApi.get_facturas().then(function (response) {
            self.facturas = response.data;
            //console.log("facturas");
            //console.log(response);
        }).catch(function (response) {
            console.log(response.data.error.message);
            //response.status 500
            //response.statusText Internal Server Error
//            if (response.status == 401) {
//                $state.go('login');
//            }

        });

        self.verFactura = function (factura) {
            console.log("ver factura " + factura.id_factura);
            $state.go('facturas.vistarapida', {id_factura: factura.id_factura});

        };
        self.enviarFactura = function (factura) {
            console.log("enviar factura " + factura.id_factura);
        };
        self.eliminarFactura = function (factura) {
            console.log("eliminar factura ", +factura.id_factura);
        };
        self.editarFactura = function (factura) {
            console.log("editar factura " + factura.id_factura);
            $state.go('facturas.editar', {id_factura: factura.id_factura});
        };
        self.pdfFactura = function (factura) {
            console.log("pdf factura " + factura.id_factura);
        };
    }]);
