function 翻译选中文本() {
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, function (选中内容) {
    // TODO: 如果没有toString, 报错: -,.toLowerCase is not function
    var 选中文本 = 选中内容.toString();
    if (!选中文本) {
      置弹窗内容({"英文": "", "释义": "无选中文本"});
      return;
    }

    查词并显示(选中文本);
  });
}

function 查词并显示(英文) {
    // TODO: 似乎无效
    if (!词典接口.已载入词典()) {
      置弹窗内容("", "载入词典数据中...");
      return;
    }
    var 释义 = 词典接口.查词(英文)
    if (!释义) {
      英文 = 英文.toLowerCase();
      释义 = 词典接口.查词(英文);
    }
    if (!释义) {
      英文 = 英文.toUpperCase();
      释义 = 词典接口.查词(英文);
    }
    置弹窗内容({"英文": 英文, "释义": 释义});
}

function 置弹窗内容(查词结果) {
  var 英文 = 查词结果.英文;
  var 释义 = 查词结果.释义;
  英文输入.value = 英文 ? 英文 : "";
  清除文本内容(释义部分);
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

function 清除文本内容(元素) {
  while (元素.hasChildNodes()) {
    元素.removeChild(元素.firstChild)
  }
}

function 置文本内容(元素, 文本) {
  元素.appendChild(document.createTextNode(文本));
}

var 词典接口 = chrome.extension.getBackgroundPage();
var 释义部分 = document.getElementById("释义");
var 英文输入 = document.getElementById("英文输入");

英文输入.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
    查词并显示(英文输入.value);
  }
});

翻译选中文本();