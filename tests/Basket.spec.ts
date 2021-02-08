import { Basket } from '../classes/Basket';
import { Item } from '../classes/Item';

describe('Basket', () => {

	const itemA = new Item(10, 'A');
	const itemB = new Item(20, 'B');
	const itemC = new Item(30, 'C');

	it('should have a new item after adding', () => {
		const basket = new Basket();
		basket.addItem(itemA);
		expect(basket.getItems().length).toBe(1);
	});

	it('should calculate the total of all items in basket', () => {
		const basket = new Basket();
		basket.addItem(itemA);
		basket.addItem(itemB);
		basket.addItem(itemC);
		const total = basket.calculateItems();
		expect(total).toBe(60);
	});


	it('return 25 after adding 3 itemA', () => {
		const basket = new Basket();
		basket.addItem(itemA);
		basket.addItem(itemA);
		basket.addItem(itemA);
		const total = basket.calculateItems();
		expect(total).toBe(25);
	});

	
});
