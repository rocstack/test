export class Item {
	private price: number;
	private name: string;
	
	constructor(price: number, name: string) {
		this.price = price;
		this.name = name;
	}

	getPrice() {
		return this.price;
	}

	getName() {
		return this.name;
	}
}