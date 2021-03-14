import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  get total(): number {
    return this._items.reduce((sum, current) => sum + current.price, 0);
  }

  totalDiscount(discount: number): number {
    discount ? discount : 100;
    return this.total * (1 - discount / 100);
  }
}
