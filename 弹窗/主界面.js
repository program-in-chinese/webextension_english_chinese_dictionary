function 翻译选中文本() {
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, function (选中内容) {
    // TODO: 如果没有toString, 报错: -,.toLowerCase is not function
    var 选中文本 = 选中内容.toString();
    if (!选中文本) {
      置弹窗内容("", "无选中文本");
      return;
    }
    var 词典接口 = chrome.extension.getBackgroundPage();

    // TODO: 似乎无效
    if (!词典接口.已载入词典()) {
      置弹窗内容("", "载入词典数据中...");
      return;
    }
    var 释义 = 词典接口.查词(选中文本);
    置弹窗内容(选中文本, 释义);
  });
}

function 置弹窗内容(英文, 释义) {
  var 窗体 = document.body;
  var 英文部分 = document.getElementById("英文");
  var 释义部分 = document.getElementById("释义");
  置文本内容(英文部分, 英文);
  if (释义) {
    var 多行 = 释义.split('\\n');
    for (var 行数 in 多行) {
      置文本内容(释义部分, 多行[行数]);
      释义部分.appendChild(document.createElement("br"));
    }
  } else {
    置文本内容(释义部分, "未找到此词条");
  }
}

function 置文本内容(元素, 文本) {
  元素.appendChild(document.createTextNode(文本));
}

翻译选中文本();