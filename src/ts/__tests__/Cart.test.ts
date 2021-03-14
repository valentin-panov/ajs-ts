import Movie from "../domain/Movie";
import Cart from "../service/Cart";

test("new cart should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("cart should accept 2 movies", () => {
  const cart = new Cart();
  const movie = new Movie(
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
  cart.add(movie);
  cart.add(movie);
  expect(cart.items.length).toBe(2);
});

test("cart should count total", () => {
  const cart = new Cart();
  const movie = new Movie(
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
  cart.add(movie);
  cart.add(movie);
  expect(cart.total).toBe(200);
});

test("cart should correct count total with discount", () => {
  const cart = new Cart();
  const movie = new Movie(
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
  cart.add(movie);
  cart.add(movie);
  expect(cart.totalDiscount(10)).toBe(180);
});
