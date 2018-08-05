(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.message="";
	$scope.CreateMessage = function () {
		var counter = 0;
		if ($scope.input != null)
			counter = $scope.input.replace(/\s/g, "").split(',').filter(String).length;
		var message;
		$scope.color = {"color" : "green"};
		switch(counter) {
			case 0:
				message = "Please enter data first";
				$scope.color = {"color" : "red"};
				break;
			case 1:
			case 2:
			case 3:
				message = "Enjoy!"
				break;
			default:
				message = "Too much!"
		}
		$scope.message = message;
	}
};

})();