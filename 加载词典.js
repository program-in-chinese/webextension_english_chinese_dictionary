
const 词典文件 = '词典数据/中文释义.json'
var 词典数据 = {};

var 开始 = new Date();
fetch(chrome.runtime.getURL(词典文件))
  .then((响应) => {
    console.log("已响应: " + ((new Date()) - 开始)/1000 + "秒");
    开始 = new Date();
    return 响应.json();
  })
  .then((数据) => {
    词典数据 = 数据;
    console.log("已载入: " + ((new Date()) - 开始)/1000 + "秒");
    开始 = new Date();
  });

function 取释义(选中文本) {
  console.log("取释义: " + 选中文本);
  开始 = new Date();
  var 释义 = 词典数据[选中文本];
  if (!释义) {
    选中文本 = 选中文本.toLowerCase();
    释义 = 词典数据[选中文本];
  }
  return 释义;
}