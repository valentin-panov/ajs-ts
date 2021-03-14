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

  remove(remove_id: number): void {
    // здесь бы проверку на валидность индекса вставить, но этого нет в условиях задачи :)
    for (let i = 0; i < this._items.length; i += 1) {
      if (this._items[i].id === remove_id) {
        this._items.splice(i, 1);
      }
    }
  }
}
