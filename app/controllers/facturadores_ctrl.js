angular.module('FacturasApp').controller('FacturadoresCtrl', ['$http','FacturasApi', function ($http,FacturasApi) {
        var self = this;
        self.facturadores = [];
        FacturasApi.get_facturadores().then(function (response) {
            self.facturadores = response.data;
        });


    }]);

