---
sidebarDepth: 2
---

## 单行代码块

在单行代码块中使用空格

```js
bad
function foo() {return true}
if (foo) {bar = 0}

good
function foo() { return true }
if (foo) { bar = 0 }
```

## 元素属性

- 元素属性使用双引号包裹
- 可以将该写的属性全部写上
- 元素属性要换行书写

```html
bad
<img src='' alt='' />
<MyComponent foo='foo' bar='bar' />

good
<img src="" alt="" />
<MyComponent a="a" b="b" c="c"></MyComponent>
```

## 变量命名

当命名变量时，主流分为驼峰式命名（constiableName）和下划线命名（constiable_name）两大阵营。
:::info
团队约定使用驼峰式命名
:::

## 大括号风格

在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 JavaScript 中，主要有三种风格，如下：
