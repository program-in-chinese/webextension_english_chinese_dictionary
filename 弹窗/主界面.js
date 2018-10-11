
function 格式化(释义) {
  return 释义.replace(/(\r\n|\\n|\r)/g, "<br/>");
}

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
    console.log("选中文本: " + 选中文本);
    var 释义 = chrome.extension.getBackgroundPage().取释义(选中文本);
    console.log("释义: " + 释义);
    document.body.innerHTML = 选中文本 + "<br/>" + (释义 ? 格式化(释义) : "未找到");
  });
}

翻译选中文本();