const auth = require("../middleware/auth");

describe("auth", function () {
  it("should exist ",function ()  {
    expect(auth).toBeDefined();
  });
  it("should ",function () {
    expect(typeof auth).toBe("function");
  });
  
});
