angular.module('FacturasApp').controller('LoginCtrl', ['$state', '$stateParams', 'FacturasApi', '$auth',
    function ($state, $stateParams, FacturasApi, $auth) {
        var self = this;
        self.message = null;
        self.user = {};
      
        self.login = function (user) {
            //$state.go('facturas');
            $auth.login(user).then(function (response) {
                console.log("response token");
                console.log(response.data.token);
                console.log("isAuthenticated: ", $auth.isAuthenticated());
                if ($auth.isAuthenticated()) {
                    $state.go('facturas');
                } else {
                    //TODO
                }
            }).catch(function (response) {
                console.log("catch");
                console.log(response);
                if (response.status === 401) {
                    //statusText==="Unauthorized"
                    self.message = response.data.error.message;
                }
            });
        };

        self.authenticate = function (provider) {
            $auth.authenticate(provider);
        };


    }]);