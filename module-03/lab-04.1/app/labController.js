app.controller("labController", [
    "$scope", "$timeout", "$q", "$http",

    function($scope, $timeout, $q, $http) {
        $scope.model = {
            number: 0,
            result: "Ready",
        };

        $scope.getCountries = getCountries;
        $scope.loadDetail = loadDetail;

        function getCountries() {
            $http.get("api/v1/countryid")
                .then(function(response) {
                    $scope.model.repos = response.data;
                }, function(response) {
                    $scope.model.repos = "Error: " + response.data.message;
                });
        }

        function loadDetail(name) {
            var url = 'https://api.github.com/repos/angular/' + name;
            $http.get(url)
                .then(function(response) {
                    $scope.model.detail = response.data;
                }, function(response) {
                    $scope.model.detail = { error: true, message: 'Error: ' + response.data.message };
                });
        }

    }
]);