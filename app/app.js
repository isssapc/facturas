'use strict';
var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function ($window) {
        return $window._;
    }]);
var app = angular.module('FacturasApp', ['ui.router', 'smart-table', 'underscore', 'myApp.version', 'satellizer']);

app.run(function ($rootScope, $state, $auth) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
//        console.log("event", event);
//        console.log("toState", toState);
//        console.log("fromState", fromState);
//        console.log("toParams", toParams);
//        console.log("fromParams", fromParams);
//        console.log("options", options);
        if (toState.name !== 'login' && !$auth.isAuthenticated()) {
            event.preventDefault();
            console.log("------------------------------------------------------------------");
            console.log("No está autenticado. Prevenimos la navegacion a: " + toState.name);
            console.log("------------------------------------------------------------------");
            if (fromState.name !== 'login') {
                $state.go('login');
            }
        }
    });

});

app.config(['$stateProvider', '$urlRouterProvider', '$authProvider',
    function ($stateProvider, $urlRouterProvider, $authProvider) {

        $authProvider.baseUrl = "http://localhost:8000/facturacion_api/index.php";
        $authProvider.tokenPrefix = 'facturacion';

        $urlRouterProvider.otherwise('/login');
        $stateProvider
                .state('home', {
                    url: '/'

                })
                .state('nuevo_producto', {
                    url: '/nuevo_producto',
                    templateUrl: 'templates/nuevo_producto.html',
                    controller: 'NuevoProductoCtrl as ctrl'

                })
                .state('nuevo_usuario', {
                    url: '/nuevo_usuario',
                    templateUrl: 'templates/nuevo_usuario.html',
                    controller: 'NuevoUsuarioCtrl as ctrl'

                })
                .state('nuevo_facturador', {
                    url: '/nuevo_facturador',
                    templateUrl: 'templates/nuevo_facturador.html',
                    controller: 'NuevoFacturadorCtrl as ctrl'

                })
                .state('nuevo_pago', {
                    url: '/nuevo_pago',
                    templateUrl: 'templates/nuevo_pago.html'
                })
                .state('gestionar_productos', {
                    url: '/gestionar_productos',
                    templateUrl: 'templates/gestionar_productos.html',
                    controller: 'ProductosCtrl as ctrl'
                })
                .state('nueva_factura', {
                    url: '/nueva_factura',
                    templateUrl: 'templates/nueva_factura.html',
                    controller: 'NuevaFacturaCtrl as ctrl'
                })
                .state('nuevo_cliente', {
                    url: '/nuevo_cliente',
                    templateUrl: 'templates/nuevo_cliente.html',
                    controller: 'NuevoClienteCtrl as ctrl'
                })
                .state('facturas', {
                    url: '/facturas',
                    templateUrl: 'templates/facturas.html',
                    controller: "FacturasCtrl as ctrl"
                })
                .state('facturas.vistarapida', {
                    url: '/vistarapida/:id_factura',
                    views: {
                        "@": {
                            templateUrl: 'templates/vista_factura.html',
                            controller: "VistaRapidaFacturaCtrl as ctrl"
                        }
                    }
                })
                .state('facturas.editar', {
                    url: '/editar/:id_factura',
                    views: {
                        "@": {
                            templateUrl: 'templates/editar_factura.html',
                            controller: "EditarFacturaCtrl as ctrl"
                        }
                    }
                })
                .state('pagos', {
                    url: '/pagos',
                    templateUrl: 'templates/pagos.html',
                    controller: "PagosCtrl as ctrl"
                })
                .state('facturadores', {
                    url: '/facturadores',
                    templateUrl: 'templates/facturadores.html',
                    controller: "FacturadoresCtrl as ctrl"
                })
                .state('usuarios', {
                    url: '/usuarios',
                    templateUrl: 'templates/usuarios.html',
                    controller: "UsuariosCtrl as ctrl"
                })
                .state('reporte_ventas', {
                    url: '/reporte_ventas',
                    templateUrl: 'templates/reporte_ventas.html'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl as ctrl'

                })
                .state('logout', {
                    url: '/logout',
                    controller: 'LogoutCtrl as ctrl'
                })
                .state('clientes', {
                    url: '/clientes',
                    templateUrl: 'templates/clientes.html',
                    controller: "ClientesCtrl as ctrl",
                    resolve: {
                        clientes: function (FacturasApi) {
                            return FacturasApi.get_clientes();
                        }
                    }
                });
    }]);

app.controller('AppCtrl', ['$auth', function ($auth) {
        var self = this;

    }]);












