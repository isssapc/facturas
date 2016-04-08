angular.module('FacturasApp').controller('NuevoFacturadorCtrl', ['$http', 'FacturasApi', function ($http, FacturasApi) {
        var self = this;

        self.facturador = {};


        self.add_facturador = function (facturador) {
            FacturasApi.add_facturador(facturador).then(function (response) {
                console.log("nuevo_facturador", response.data);
                self.facturador = {};
            }, function (err) {
                console.log("ha ocurrido un error al intentar agregar el facturador");
            });
        };


    }]);


