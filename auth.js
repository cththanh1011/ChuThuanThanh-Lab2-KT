function login(username, password) {
    // Check valid admin login
    if (username === "admin" && password === "999") {
        return true;
    }

    return false;
}

module.exports = login;
