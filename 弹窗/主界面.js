
function 格式化(释义) {
  return 释义.replace(/(\\n)/g, "<br/>");
}

function 翻译选中文本() {
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, function (选中内容) {
    // TODO: 如果没有toString, 报错: -,.toLowerCase is not function
    var 选中文本 = 选中内容.toString();
    if (!选中文本) {
      置弹窗内容("无选中文本");
      return;
    }
    var 词典接口 = chrome.extension.getBackgroundPage();
    if (!词典接口.已载入词典()) {
      置弹窗内容("载入词典数据中...");
      return;
    }
    var 释义 = 词典接口.取释义(选中文本);
    置弹窗内容(选中文本, 释义);
  });
}

function 置弹窗内容(英文, 释义) {
  var 窗体 = document.body;
  var 英文部分 = document.getElementById("英文");
  var 释义部分 = document.getElementById("释义");
  英文部分.appendChild(document.createTextNode(英文));
  var 多行 = 释义.split('\\n');
  for (var 行数 in 多行) {
    释义部分.appendChild(document.createTextNode(多行[行数]));
    释义部分.appendChild(document.createElement("br"));
  }
}

翻译选中文本();