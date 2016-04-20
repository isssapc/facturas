angular.module('FacturasApp')
        .factory('FacturasApi', ['$http', function FacturasApiFactory($http) {
                var url = 'http://localhost:8000/facturacion_api/index.php/';// 'http://192.168.1.81:8000/test_rest/index.php/';

                return {
                    get_usuarios: function () {
                        return $http.get(url + 'usuarios/');
                    },
                    get_clientes: function () {
                        return $http.get(url + 'clientes/');
                    },
                    get_nombres_clientes: function (id_dominio) {
                        return $http.get(url + 'clientes/nombres', {id_dominio: id_dominio});
                    },
                    get_facturas: function () {
                        return $http.get(url + 'facturas/');
                    },
                    get_factura: function (id_factura) {
                        return $http.get(url + 'facturas/detalle/id_factura/' + id_factura);
                    },
                    get_productos: function () {
                        return $http.get(url + 'productos/');
                    },
                    get_nombres_productos: function (id_dominio) {
                        return $http.get(url + 'productos/nombres', {id_dominio: id_dominio});
                    },
                    get_facturadores: function () {
                        return $http.get(url + 'facturadores/');
                    },
                    get_preferencias: function () {
                        return $http.get(url + 'preferencias/');
                    },
                    get_nombres_facturadores: function (id_dominio) {
                        return $http.get(url + 'facturadores/nombres', {id_dominio: id_dominio});
                    },
                    get_nombres_preferencias: function (id_dominio) {
                        return $http.get(url + 'preferencias/nombres', {id_dominio: id_dominio});
                    },
                    get_pagos: function () {
                        return $http.get(url + 'pagos/');
                    },
                    get_impuestos: function () {
                        return $http.get(url + 'impuestos/');
                    },
                    add_producto: function (producto) {
                        return $http.post(url + 'productos/', {producto: producto});
                    },
                    add_cliente: function (cliente) {
                        return $http.post(url + 'clientes/', {cliente: cliente});
                    },
                    add_usuario: function (usuario) {
                        return $http.post(url + 'usuarios/', {usuario: usuario});
                    },
                    add_facturador: function (facturador) {
                        return $http.post(url + 'facturadores/', {facturador: facturador});
                    }
                    ,
                    add_factura: function (factura, productos) {
                        return $http.post(url + 'facturas/', {factura: factura, productos: productos});
                    }

                };
            }]);

