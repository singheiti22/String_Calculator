const add = require("./main"); // Import function

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});