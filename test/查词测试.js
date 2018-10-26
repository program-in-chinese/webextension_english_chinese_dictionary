QUnit.test("英文带前后空格", function (assert) {
  assert.deepEqual(
    取释义({ "to": "到" }, ' to '),
    "到",
    "");
});

QUnit.test("大写英文", function (assert) {
  assert.deepEqual(
    取释义({ "to": "到" }, 'To'),
    undefined,
    "");
});

QUnit.test("小写英文", function (assert) {
  assert.deepEqual(
    取释义({ "To": "到" }, 'to'),
    undefined,
    "");
});