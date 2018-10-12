const 词典路径 = '词典数据/词典'
const 文件扩展 = '.json'
var 词典文件 = {};
for (var 文件序号 = 0; 文件序号<16; 文件序号++) {
  词典文件[文件序号] = false;
}
var 词典数据 = {};

function 载入部分词典(文件) {
  return function() {
    var 文件路径 = 词典路径 + 文件 + 文件扩展;
    fetch(chrome.runtime.getURL(文件路径))
  .then((响应) => 响应.json())
  .then((数据) => {
    for (var 英文 in 数据) {
      词典数据[英文] = 数据[英文];
    }
    词典文件[文件] = true;
    console.log(JSON.stringify(词典文件));
    if (已载入词典()) {
      console.log("已载入: " + ((new Date()) - 开始)/1000 + "秒");
    }
  });
  }
}

var 开始 = new Date();
for (var 文件 in 词典文件) {
  载入部分词典(文件)();
}

function 已载入词典() {
  for (var 文件 in 词典文件) {
    if (!词典文件[文件]) {
      return false;
    }
  }
  return true;
}

function 取释义(选中文本) {
  var 释义 = 词典数据[选中文本];
  if (!释义) {
    选中文本 = 选中文本.toLowerCase();
    释义 = 词典数据[选中文本];
  }
  return 释义;
}