import { Item } from './Item';

export class Basket {
  private items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  calculateItems() {
		let total = 0;

		const productA = this.items.filter(item => item.getName());
		if(productA.length >= 3) {
			return 25;
		}

		this.items.forEach(i => {
			total += i.getPrice();
		})
    return total;
  }
}
