var 词典数据 = {};

function 格式化(释义) {
  return 释义.replace(/(\r\n|\\n|\r)/g, "<br/>");
}

// TODO: 在文本处理后再载入词典
function 翻译选中文本() {
  chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
  }, function(选中内容) {
    // TODO: 如果没有toString, 报错: -,.toLowerCase is not function
    var 选中文本 = 选中内容.toString();
    if (!选中文本) {
      document.body.innerHTML = "无选中文本";
      return;
    }
    var 释义 = 词典数据[选中文本];
    if (!释义) {
      选中文本 = 选中文本.toLowerCase();
      释义 = 词典数据[选中文本];
    }
    document.body.innerHTML = 选中文本 + "<br/>" + (释义 ? 格式化(释义) : "未找到");
  });
}

var 开始 = new Date();
const 词典文件 = '词典数据/中文释义.json'  //测试
fetch(chrome.runtime.getURL(词典文件))
  .then(function(响应) {
    document.body.innerHTML = "载入词典...";
    return 响应.json();
  }, function(error) {
    console.error("Failed!", error);
  })
  .then(function(数据) {
    if (Object.keys(词典数据).length === 0) {
      词典数据 = 数据;
      console.log("置词典时间: " + ((new Date()) - 开始)/1000 + "秒");
      开始 = new Date();
    } else {
      词典数据 = 数据;
    }
  }, function(error) {
    console.error("数据错误!", error);
  })
  .then(翻译选中文本);