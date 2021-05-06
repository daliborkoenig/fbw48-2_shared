class CoffeeShop {
	constructor (name, menu) {
		this.name = name
		this.menu = menu
		this.orders = []
	}
	addOrder(name){
		let counter = 0
		for (let element of this.menu) {
			if(name == element.item){
				this.orders.push(name)
				counter++
			}
		}
		if (counter > 0) {
			console.log(`Your order of ${name} has been taken succesfully.`);
		}
		else {
			console.log(`This item is currently unavailable!`);
		}
	}
	fullFillOrder(){
		if(this.orders.length > 0){
			console.log(`The ${this.orders[0]} is ready!`);
			this.orders.shift()
		}
		else{
			console.log(`All orders have been fulfilled!`);
		}
	}
	listOrders(){
		console.log(`Open orders:`);
		this.orders.forEach(element => {
			console.log(`- ${element}`);
		});
	}
	dueAmount(){
		let due = 0
		for (let itemA of this.orders){
			for(let itemB of this.menu){
				if (itemA == itemB.item)
				due += itemB.price
				}
		}
		console.log(`Total amount due is: ${due}$`);
	}
	cheapestItem(){
		let arr = JSON.parse(JSON.stringify(this.menu))
		arr.sort((a, b) => a.price - b.price)
		console.log(`The cheapest item on the menu is ${arr[0].item} with the price of ${arr[0].price}$`);
	}
	mostExpensiveItem(){
		let arr = JSON.parse(JSON.stringify(this.menu))
		arr.sort((a, b) => b.price - a.price)
		console.log(`The most expensive item on the menu is ${arr[0].item} with the price of ${arr[0].price}$`);
	}

	drinksOnly(){
		let arr = []
		for(let item of this.menu){
			if (item.type === "drink") {
				arr.push(item.item)
			}
		}
		console.log(`These are the drink items on the menu: ${arr}`);
	}
	foodOnly(){
		let arr = []
		for(let item of this.menu){
			if (item.type === "food") {
				arr.push(item.item)
			}
		}
		console.log(`These are the food items on the menu: ${arr}`);
	}
}

let items = [{item: "coffee", type: "drink", price: 5},{item: "tea", type: "drink", price: 4},{item: "beer", type: "drink", price: 10},{item: "bagel", type: "food", price: 7},{item: "sandwich", type: "food", price: 10},{item: "eggs", type: "food", price: 12}]

let tsc = new CoffeeShop("CoffeeShop", items)

tsc.addOrder("coffee")
tsc.addOrder("tea")
tsc.addOrder("tea")
tsc.addOrder("sandwich")
tsc.addOrder("beer")
tsc.addOrder("bagel")

tsc.fullFillOrder()
tsc.fullFillOrder()
tsc.fullFillOrder()
tsc.fullFillOrder()
// tsc.fullFillOrder()
// tsc.fullFillOrder()
// tsc.fullFillOrder()

tsc.listOrders()

tsc.dueAmount()

tsc.cheapestItem()

tsc.mostExpensiveItem()

tsc.drinksOnly()

tsc.foodOnly()
// console.log(tsc);

