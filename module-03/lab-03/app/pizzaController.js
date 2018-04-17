app.controller('pizzaController', [
    '$scope',
    function($scope) {
        $scope.model = {
            isCloseAlert: true,
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: []
        };

        $scope.addTopping = function(topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            $scope.model.isCloseAlert = false;

        };

        $scope.closeAlert = function() {
            $scope.model.isCloseAlert = true;

        };


        $scope.noResalt = function() {
            return ($scope.model.availableToppings.filter(item => item.includes($scope.model.search)).length);

        }

    }
]);