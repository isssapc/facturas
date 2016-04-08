angular.module('FacturasApp').controller('NuevoUsuarioCtrl', ['$http', 'FacturasApi', function ($http, FacturasApi) {
        var self = this;

        self.usuario = {};


        self.add_usuario = function (usuario) {
            FacturasApi.add_usuario(usuario).then(function (response) {
                console.log("nuevo_usuario", response.data);
                self.usuario = {};
            }, function (err) {
                console.log("ha ocurrido un error al intentar agregar el usuario");
            });
        };


    }]);

