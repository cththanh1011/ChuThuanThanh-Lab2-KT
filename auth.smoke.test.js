const login = require("./auth");

test("Smoke Test - Login with correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});
