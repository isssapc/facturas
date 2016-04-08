angular.module('FacturasApp').controller('UsuariosCtrl', ['$http', 'FacturasApi', function ($http, FacturasApi) {
        var self = this;
        self.usuarios = [];
        FacturasApi.get_usuarios().then(function (response) {
            self.usuarios = response.data;
        });


    }]);


