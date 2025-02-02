const add = require("./main"); // Import function

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself if a single number is provided", () => {
    expect(add("1")).toBe(1);
});

test("should return sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
});

test("should return sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,5,6,0")).toBe(17);
})

test("should handle \n for new line", () => {
    expect(add("1\n2,3")).toBe(6);
})

test("should handle miscellenous delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
})
