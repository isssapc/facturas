
angular.module('FacturasApp').controller('NuevoClienteCtrl', ['$http', 'FacturasApi', function ($http, FacturasApi) {
        var self = this;

        self.cliente = {};


        self.add_cliente = function (producto) {
            FacturasApi.add_cliente(producto).then(function (response) {
                console.log("nuevo_cliente", response.data);
                self.cliente = {};
            }, function (err) {
                console.log("ha ocurrido un error al intentar agregar el cliente");
            });
        };


    }]);


