app.controller("labController", [
    "$scope", "$timeout", "$q", "$http", "gitHub", /* "$promise", */

    function($scope, $timeout, $q, $http, gitHub, /* promise */ ) {
        $scope.model = {
            number: 0,
            result: "Ready",
            fil: ""
        };
        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;

        function checkOddNumber(input) {
            $scope.model.result = "Working...";
            checkOddNumberHandler(input).then(function(result) {
                    $scope.model.result = "Success: " + result;
                },
                function(result) {
                    $scope.model.result = "Error: " + result;
                });
        }

        function checkOddNumberHandler(input) {
            var defer = $q.defer();
            $timeout(function() {
                if (isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 1000);
            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }

        function getRepos(fil) {
            $scope.model.detail = null;
            gitHub.getAll({ org: fil })
                .$promise
                .then(res => $scope.model.repose = res)
                .catch(err => console.log(err));
        }


        function loadDetail(fil, name) {
            $scope.model.detail = null;
            $scope.model.detail = gitHub.getDetail({ org: fil, id: name });
        }

    }
]);