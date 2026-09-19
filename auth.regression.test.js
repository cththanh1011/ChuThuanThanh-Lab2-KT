const login = require("./auth");

test("Regression Test - Incorrect password", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Regression Test - Empty username", () => {
    expect(login("", "123")).toBe(false);
});

test("Regression Test - Password with special characters", () => {
    expect(login("admin", "123@#$")).toBe(false);
});

test("Regression Test - Locked account", () => {
    expect(login("locked", "123")).toBe(false);
});
