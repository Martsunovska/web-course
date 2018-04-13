app.controller('menuController', [
    '$scope',
    function($scope) {
        $scope.model = {
            title: 'Our Menu',
            mainDish: {
                name: '',
                price: ''
            }
        };

        $scope.$watch('model.mainDish.name', function(newValue, oldValue) {
            if (newValue === 'Combo Pizza') {
                $scope.model = { title: 'Super Menu' };
            }
            /* else {
                           $scope.model = { title: 'Our Menu' };
                       } */
        });

        $scope.changeMainDish = function(item, price) {
            $scope.model.mainDish.name = item;
            $scope.model.mainDish.price = price;

        }

    }
]);