QUnit.test("英文带前后空格", function (assert) {
  assert.deepEqual(
    取释义({ "to": "到" }, ' to '),
    "到",
    "");
});