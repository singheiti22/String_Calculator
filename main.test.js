const add = require("./main"); // Import function

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself if a single number is provided", () => {
    expect(add("1")).toBe(1);
});