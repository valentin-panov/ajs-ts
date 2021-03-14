import Movie from "../domain/Movie";
import Cart from "../service/Cart";

test("new cart should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("cart should accept 2 movies", () => {
  const cart = new Cart();
  const movie1 = new Movie(
    1,
    "Первый",
    100,
    "First",
    2020,
    "USA",
    "Ever",
    "documentary",
    1000
  );
  const movie2 = new Movie(
    2,
    "Первый",
    100,
    "First",
    2020,
    "USA",
    "Ever",
    "documentary",
    1000
  );
  cart.add(movie1);
  cart.add(movie2);
  expect(cart.items.length).toBe(2);
});

test("cart should count total", () => {
  const cart = new Cart();
  const movie1 = new Movie(
    1,
    "Первый",
    100,
    "First",
    2020,
    "USA",
    "Ever",
    "documentary",
    1000
  );
  const movie2 = new Movie(
    2,
    "Первый",
    100,
    "First",
    2020,
    "USA",
    "Ever",
    "documentary",
    1000
  );
  cart.add(movie1);
  cart.add(movie2);
  expect(cart.total).toBe(200);
});

test("cart should correct count total with discount", () => {
  const cart = new Cart();
  const movie1 = new Movie(
    1,
    "Первый",
    100,
    "First",
    2020,
    "USA",
    "Ever",
    "documentary",
    1000
  );
  const movie2 = new Movie(
    2,
    "Первый",
    100,
    "First",
    2020,
    "USA",
    "Ever",
    "documentary",
    1000
  );
  cart.add(movie1);
  cart.add(movie2);
  expect(cart.totalDiscount(10)).toBe(180);
});

test("cart should remove item by id", () => {
  const cart = new Cart();
  const movie1 = new Movie(
    1,
    "Первый",
    100,
    "First",
    2020,
    "USA",
    "Ever",
    "documentary",
    1000
  );
  const movie2 = new Movie(
    2,
    "Первый",
    100,
    "First",
    2020,
    "USA",
    "Ever",
    "documentary",
    1000
  );
  cart.add(movie1);
  cart.add(movie2);
  cart.remove(1);
  expect(cart.items.length).toBe(1);
});
