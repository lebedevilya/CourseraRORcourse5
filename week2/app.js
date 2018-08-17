(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;
	toBuy.items = ShoppingListCheckOffService.tobuyitems();
	toBuy.itemName = "";
	toBuy.itemQuantity = "";
	toBuy.addItem = function () {
		ShoppingListCheckOffService.addItem(toBuy.itemName, toBuy.itemQuantity);
	}

	toBuy.move = function (ItemId) {
		ShoppingListCheckOffService.moveItem(ItemId);
	}
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var alreadyBought = this;
	alreadyBought.items = ShoppingListCheckOffService.boughtitems();

	alreadyBought.deleteItem = function (ItemId) {
		ShoppingListCheckOffService.deleteItem(ItemId);
	};
};

function ShoppingListCheckOffService() {
	var service = this;
	var tobuyitems = [{name: "Potato", quantity: "42 pieces"},{name: "Milk", quantity: "2 bottles"},{name: "Cucumber", quantity: "1 kilo"},{name: "Eggs", quantity: "4 packs"},{name: "Sausages", quantity: "1 packet"}];
	var boughtitems = [];
	service.addItem = function (ItemName, quantity) {
		var item = {
			name: ItemName,
			quantity: quantity
		};
		tobuyitems.push(item);
	};

	service.moveItem = function(ItemId) {
		boughtitems.push(tobuyitems[ItemId]);
		tobuyitems.splice(ItemId, 1);
	};

	service.deleteItem = function(ItemId) {
		boughtitems.splice(ItemId, 1);
	};

	service.tobuyitems = function () {
		return tobuyitems;
	};

	service.boughtitems = function () {
		return boughtitems;
	};
};

})();