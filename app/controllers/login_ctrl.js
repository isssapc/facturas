angular.module('FacturasApp').controller('LoginCtrl', ['$state', 'FacturasApi', '$auth',
    function ($state, FacturasApi, $auth) {
        var self = this;
        self.user = {};

        self.login = function (user) {
            //$state.go('facturas');
            $auth.login(user).then(function (response) {
                console.log(response.data.token);
            }).catch(function (response) {
                console.log("catch");
                console.log(response);
            });
        };

        self.authenticate = function (provider) {
            $auth.authenticate(provider);
        };


    }]);