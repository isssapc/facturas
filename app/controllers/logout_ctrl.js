angular.module('FacturasApp').controller('LogoutCtrl', ['$state', '$auth', function ($state,  $auth) {

        $auth.removeToken();
        $state.go('login');

    }]);