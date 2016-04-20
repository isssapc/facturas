angular.module('FacturasApp').controller('ClientesCtrl', ['$http', 'FacturasApi','clientes',
    function ($http, FacturasApi,clientes) {
        var self = this;
        self.clientes = clientes.data;
//        FacturasApi.get_clientes().then(function (response) {
//            self.clientes = response.data;
//        });


    }]);