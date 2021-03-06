本周课程主要讲解到浏览器的排版和渲染，对应平时所说的重排和重绘的概念。

## 排版

通过本次课程的学习，从大体上了解排版是浏览器确定它们位置的过程，

- 1. 第一代排版是正常流，position,float,display 等特性，第一代排版主要是解决文字块布局的排版，所以大多数排版的直观感觉都是倾向于解决文字布局的排版
- 2. 第二代排版是 flex 排版，flex 属性将每一行排版后的剩余空间平均分配给主轴方向的 width/height 属性；
- 3. 第三代排版是 grid，网格排版

课程中通过解析 flex 排版主要是以下的步骤

- 1. 分行
- 2. 计算主轴
- 3. 计算交叉轴
- 4. 绘制元素

## 渲染和绘制

### 渲染

渲染整体来说分为两大类：图形和文字。盒的背景、边框、SVG 元素、阴影等特性，都是需要绘制的图形类。这就像我们实现 HTTP 协议必须要基于 TCP 库一样，这一部分，我们需要一个底层库来支持。一般的操作系统会提供一个底层库，比如在 Android 中，有大名鼎鼎的 Skia，而 Windows 平台则有 GDI，一般的浏览器会做一个兼容层来处理掉平台差异。

盒中的文字，也需要用底层库来支持，叫做字体库。字体库提供读取字体文件的基本能力，它能根据字符的码点抽取出字形。字形分为像素字形和矢量字形两种。通常的字体，会在 6px 8px 等小尺寸提供像素字形，比较大的尺寸则提供矢量字形。矢量字形本身就需要经过渲染才能继续渲染到元素的位图上去。目前最常用的字体库是 Freetype，这是一个 C++ 编写的开源的字体库。在最普遍的情况下，渲染过程生成的位图尺寸跟它在上一步排版时占据的尺寸相同。

### 绘制

绘制是把“位图最终绘制到屏幕上，变成肉眼可见的图像”的过程，不过，一般来说，浏览器并不需要用代码来处理这个过程，浏览器只需要把最终要显示的位图交给操作系统即可。本课程是采用images库进行绘制；