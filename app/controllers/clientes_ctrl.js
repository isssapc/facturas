angular.module('FacturasApp').controller('ClientesCtrl', ['$http','FacturasApi', function ($http,FacturasApi) {
        var self = this;
        self.clientes = [];
        FacturasApi.get_clientes().then(function (response) {
            self.clientes = response.data;
        });


    }]);