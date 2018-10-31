词典数据来源: https://github.com/skywind3000/ECDICT

[中文编程知乎专栏](https://zhuanlan.zhihu.com/c_140193266)相关文章:

- [浏览器插件-离线英汉词典 0.0.7](https://zhuanlan.zhihu.com/p/48116424)
- [浏览器插件-离线英汉词典](https://zhuanlan.zhihu.com/p/46640311)

#### 安装链接
- [火狐插件](https://addons.mozilla.org/zh-CN/firefox/addon/%E7%A6%BB%E7%BA%BF%E8%8B%B1%E6%B1%89%E8%AF%8D%E5%85%B8/)
- [Chrome插件](https://chrome.google.com/webstore/detail/%E7%A6%BB%E7%BA%BF%E8%8B%B1%E6%B1%89%E8%AF%8D%E5%85%B8/ndifefelacmidghjaehmhicbchbidhpe/related?hl=en)

#### QUnit测试
在浏览器中打开`test/测试.html`, 所有测试用例应通过.

#### 打包
使用[web-ext](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference), 跳过测试部分, 以加速审核过程.
```
$ web-ext build --ignore-files=test
```
