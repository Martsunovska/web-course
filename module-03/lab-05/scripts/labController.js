app.controller('labController', [
    '$scope', 'registration',

    function($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;
        $scope.formhide = false;

        function submit(model) {
            registration.submit(model).$promise
                .then(function(response) {
                        alert(response.token);
                        $scope.formhide = true;
                        reset();
                    },
                    function(response) {
                        alert('error');
                    });
        }

        function reset() {
            $scope.model = {};
        };

        reset();

    }
]);