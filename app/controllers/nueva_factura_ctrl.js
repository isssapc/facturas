angular.module('FacturasApp').controller('NuevaFacturaCtrl', ['$http', 'FacturasApi', function ($http, FacturasApi) {
        var self = this;
        self.factura = {id_preferencia:"1"};
        self.cantidad = 1;
        //TODO: seleccionar correctamente
        self.factura.id_factura_tipo = 1;
        self.factura.id_dominio = 1;
        //------------------------
        self.factura_productos = [];
        //self.factura_impuestos=[];
        self.productos = [];
        self.impuestos = [];
        self.facturadores = [];
        self.clientes = [];
        self.preferencias = [];

        self.validar = function (producto) {
            //comprobar que no se haya añadido
//            var id = producto.id_producto;
//
//
//            console.log("num productos ", self.factura_productos.length);
//            var encontrado = _.filter(self.factura_productos, function (item) {
//                return item.producto.id_producto == id;
//            });
//
//            if (encontrado.length === 2) {
//                console.log(producto);
//                self.factura_productos[self.factura_productos.length - 1].producto = {};
//            }



        };

        self.total = function (productos) {
            var total = _.reduce(productos, function (memo, producto) {
                if (producto.cantidad && producto.impuesto && producto.precio_unitario) {

                    memo += producto.cantidad * producto.precio_unitario * (1 + parseFloat(producto.impuesto.tasa) / 100);
                }
                return memo;
            }, 0);
            return Math.round(total * 100) / 100;
        };

        self.bruto = function (productos) {
            var bruto = _.reduce(productos, function (memo, producto) {
                if (producto.cantidad && producto.impuesto && producto.precio_unitario) {

                    memo += producto.cantidad * producto.precio_unitario;
                }
                return memo;
            }, 0);
            return Math.round(bruto * 100) / 100;
        };

        self.distinctImpuestos = function (productos) {

            // buscamos los diferentes impuestos
            var impuestos = _.uniq(_.pluck(productos, 'impuesto'), function (item, index, lista) {
                return item.id_impuesto;
            });

            // para cada impuesto calculamos su total
            for (var i = 0; i < impuestos.length; i++) {
                //console.log(impuestos[i].descripcion);

                var id_impuesto = impuestos[i].id_impuesto;
                var p = _.filter(productos, function (item) {
                    return item.impuesto.id_impuesto === id_impuesto;
                });
                //console.log(JSON.stringify(p));
                var total = _.reduce(p, function (memo, producto) {
                    memo += producto.cantidad * producto.precio_unitario * (parseFloat(producto.impuesto.tasa) / 100);
                    return memo;
                }, 0);

                //console.log(impuestos[i].descripcion + " " + total);
                impuestos[i].total = Math.round(total * 100) / 100;
            }

            return impuestos;


        };


        FacturasApi.get_facturas().then(function (response) {
            self.facturas = response.data;
        });

        FacturasApi.get_nombres_productos().then(function (response) {
            self.productos = response.data;
        });

        FacturasApi.get_impuestos().then(function (response) {
            self.impuestos = response.data;
        });

        FacturasApi.get_nombres_preferencias().then(function (response) {
            self.preferencias = response.data;
        });

        FacturasApi.get_nombres_facturadores().then(function (response) {
            self.facturadores = response.data;
        });

        FacturasApi.get_nombres_clientes().then(function (response) {
            self.clientes = response.data;
        });


        self.addProducto = function () {
//            var last = self.factura_productos.length - 1;
//            if (self.factura_productos[last].producto && self.factura_productos[last].producto.id_producto) {
//                self.factura_productos.push({cantidad: 1});
//            } else {
//                console.log("complete los datos del artículo");
//            }
            self.factura_productos.push({cantidad: 1});

        };

        self.delProducto = function (producto) {

            var index = self.factura_productos.indexOf(producto);
            if (index > -1)
            {
                self.factura_productos.splice(index, 1);
            }

        };

        self.addFactura = function (factura, productos) {
            FacturasApi.add_factura(factura, productos).then(function (response) {
                console.log(response.data);
                self.factura = {};
                self.factura_productos = [];
            }, function (err) {
                console.log("error al añadir la factura");
            });
        };


        self.addProducto2 = function (producto, cantidad) {
            var nuevo = {};
            angular.copy(producto, nuevo);
            nuevo.cantidad = cantidad;
            self.factura_productos.push(nuevo);

            self.producto = {};
            self.cantidad = 1;
        };



    }]);
