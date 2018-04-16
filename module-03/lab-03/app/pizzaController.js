app.controller('pizzaController', [
    '$scope',
    function($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: []
        };

        $scope.addTopping = function(topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
        };

        /* $scope.noRes = function(topping) {
            for (var i = 0; i < $scope.model.availableToppings.length; i++) {
                if ($scope.model.availableToppings[i] === topping) {
                    return true
                }
            }
            return false;
        } */


    }
]);