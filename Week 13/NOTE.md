随堂笔记

1、nbsp会带来分词的问题，他会把前后两个单词连成一个单词。建议使用white-space去控制空格的显示；
2、quot: 双引号，amp：&，lt：小于号，gt：大于号，

CSSOM：

- window.getComputedStyle(element [, pseudoElt]);
  - element 要获取其计算样式的元素
  - pseudoElt 可选,伪元素
  - 返回 一个包含元素的所有 CSS 属性值的对象
- window
  - innerHeight,innerWidth
  - outerHeight,outerWidth
  - devicePixelRatio
- scroll
  - element
    - scrollTop
    - scrollLeft
    - scrollWidth
    - scrollHeight
    - scroll(x, y)
    - scrollBy(x, y)
    - scrollIntoView()
  - window
    - scrollX
    - scrollY
    - scroll(x, y)
    - scrollBy(x, y)
- layout
  - getClientRects()
  - __getBoundingClientRect()__