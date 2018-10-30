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

QUnit.test("词形变化1", function (assert) {
  assert.deepEqual(
    提取词形("p:abdicated/d:abdicated"),
    [{"类型": "过去式", "变化": "abdicated"}, {"类型": "过去分词", "变化": "abdicated"}],
    "");
});

QUnit.test("词形变化原型", function (assert) {
  assert.deepEqual(
    提取词形("1:s3/0:second"),
    [{"类型": "原型变换形式", "变化": ["名词复数形式", "第三人称单数"]}, {"类型": "原型", "变化": "second"}],
    "");
});