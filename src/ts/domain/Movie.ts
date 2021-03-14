import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly originalName: string,
    readonly year: number, // date-year? date.getFullYear() ?
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly duration: number // date-ms?
  ) {}
}
