import Movie from "../domain/Movie";

test("new Movie", () => {
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
  const expected = {
    id: 1,
    name: "Первый",
    price: 100,
    originalName: "First",
    year: 2020,
    country: "USA",
    slogan: "Ever",
    genre: "documentary",
    duration: 1000,
  };
  expect(movie).toEqual(expected);
});
