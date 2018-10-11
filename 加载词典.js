
const 词典文件 = '词典数据/中文释义.json'
var 词典数据 = {};

fetch(chrome.runtime.getURL(词典文件))
  .then((响应) => 响应.json())
  .then((数据) => 词典数据 = 数据);

function 取释义(选中文本) {
  var 释义 = 词典数据[选中文本];
  if (!释义) {
    选中文本 = 选中文本.toLowerCase();
    释义 = 词典数据[选中文本];
  }
  return 释义;
}