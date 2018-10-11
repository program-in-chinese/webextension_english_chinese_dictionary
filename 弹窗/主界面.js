var 词典数据 = {};

function 格式化(释义) {
  return 释义.replace(/(\r\n|\\n|\r)/g, "<br/>");
}
function 翻译选中文本() {
  chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
  }, function(selection) {
    var 释义 = 词典数据[selection];
    document.body.innerHTML = selection + "<br/>" + (释义 ? 格式化(释义) : "未找到");
  });
}

const 词典文件 = '词典数据/中文释义.json'  //测试
fetch(chrome.runtime.getURL(词典文件))
  .then((响应) => 响应.json(), function(error) {
    console.error("Failed!", error);
  })
  .then((数据) => 词典数据 = 数据, function(error) {
    console.error("数据错误!", error);
  })
  .then(翻译选中文本);