
function 取释义(词典数据, 选中文本) {
  var 英文 = 选中文本.trim();
  var 释义 = 词典数据[英文];
  if (!释义) {
    英文 = 英文.toLowerCase();
    释义 = 词典数据[英文];
  }
  return 释义;
}