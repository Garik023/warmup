const test = require("tape");
const { User } = require("../models/index.js");

test("get from  db", async (t) => {
  const result = await User.findAll();
  t.ok(result);
});
test("insert to db", async (t) => {
  const result = await User.create({
    firstName: "Test",
    lastName: "TestName",
    email: "test@test.com",
  });
  t.ok(result);
});
