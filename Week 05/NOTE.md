# proxy

## 描述
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

## vue源码简单理解
vue2是使用Object.defineProperty中的set和get方法，来对对象进行劫持。然后通过Observer设计模式来监听、订阅、发布实现双向绑定；其中Object.defineProperty负责触发派发更新，会先出发数据更新，然后最后触发渲染watcher，来实现数据与视图双向绑定；
但是Object.defineProperty有一个很明显的缺点，他无法监听数组，所以在vue2源码中会存在重写数组的原生方法，来进行监听和派发更新；
而vue3使用的是proxy进行响应式处理，Proxy具有丰富的api，可以直接监听数组的变化和直接监听对象而非属性；proxy目前兼容ie11以上；
// TODO: 对比vue3和vue2在双向绑定的方式，尝试去分析采用proxy的好处。

## api

- handler.getPrototypeOf()
Object.getPrototypeOf 方法的捕捉器。
- handler.setPrototypeOf()
Object.setPrototypeOf 方法的捕捉器。
- handler.isExtensible()
Object.isExtensible 方法的捕捉器。
- handler.preventExtensions()
Object.preventExtensions 方法的捕捉器。
- handler.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptor 方法的捕捉器。
- handler.defineProperty()
Object.defineProperty 方法的捕捉器。
- handler.has()
in 操作符的捕捉器。
- handler.get()
属性读取操作的捕捉器。
- handler.set()
属性设置操作的捕捉器。
- handler.deleteProperty()
delete 操作符的捕捉器。
- handler.ownKeys()
Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。
- handler.apply()
函数调用操作的捕捉器。
- handler.construct()
new 操作符的捕捉器

## 使用上要注意的问题

### 1.虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理

```javascript
const target = {
  m: function () {
    console.log(this === proxy);
  }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true
```

### 2.此外，有些原生对象的内部属性，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性。

```javascript
const target = new Date();
const handler = {};
const proxy = new Proxy(target, handler);

proxy.getDate();
// TypeError: this is not a Date object.
```

# range

## 属性

Range.collapsed 只读
返回一个表示 Range 的起始位置和终止位置是否相同的布尔值。
Range.commonAncestorContainer 只读
返回完整包含 startContainer 和 endContainer 的、最深一级的节点。
Range.endContainer 只读
返回包含 Range 终点的节点。
Range.endOffset 只读
返回一个表示 Range 终点在 endContainer 中的位置的数字。
Range.startContainer 只读
返回包含 Range 开始的节点。
Range.startOffset 只读
返回一个表示 Range 起点在 startContainer 中的位置的数字。

## 方法

### 定位方法

Range.setStart()
设置 Range 的起点。
Range.setEnd()
设置 Range 的终点。
Range.setStartBefore()
以其它节点为基准，设置 Range 的起点。
Range.setStartAfter()
以其它节点为基准，设置 Range 的起点。
Range.setEndBefore()
以其它节点为基准，设置 Range 的终点。
Range.setEndAfter()
以其它节点为基准，设置 Range 的终点。
Range.selectNode()
使 Range 包含某个节点及其内容。
Range.selectNodeContents()
使 Range 包含某个节点的内容。
Range.collapse()
将 Range 折叠至其端点（boundary points，起止点，指起点或终点，下同）之一。

### 编辑方法

通过以下方法，可以从 Range 中获得节点，改变 Range 的内容。

Range.cloneContents()
返回一个包含 Range 中所有节点的文档片段。
Range.deleteContents()
从文档中移除 Range 包含的内容。
Range.extractContents()
把 Range 的内容从文档树移动到一个文档片段中。
Range.insertNode()
在 Range 的起点处插入一个节点。
Range.surroundContents()
将 Range 的内容移动到一个新的节点中。

### 其他方法

Range.compareBoundaryPoints()
比较两个 Range 的端点。
Range.cloneRange()
返回拥有和原 Range 相同的端点的克隆 Range 对象。
Range.detach()
将 Range 从使用状态中释放，改善性能。
Range.toString()
把 Range 的内容作为字符串返回。

# cssom

CSS Object Model 是一组允许用JavaScript操纵CSS的API。 它是继DOM和HTML API之后，又一个操纵CSS的接口，从而能够动态地读取和修改CSS样式。

https://css-tricks.com/an-introduction-and-guide-to-the-css-object-model-cssom/