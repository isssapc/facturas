angular.module('FacturasApp').controller('PagosCtrl', ['$http','FacturasApi', function ($http,FacturasApi) {
        var self = this;
        self.pagos = [];
        FacturasApi.get_pagos().then(function (response) {
            self.pagos = response.data;
        });


    }]);