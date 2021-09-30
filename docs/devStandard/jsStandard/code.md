# 代码规范
## 编码规范
统一团队的编码规范，有助于代码的维护。本章是传统意义上的 `Style Guideline`，目的是统一一些相对主观化的代码风格。
## 单行代码块
在单行代码块中使用空格
```js
bad
function foo(){return true}
if(foo){foo = 0}

good
function foo() { return true }
if( foo ) { foo = 0 }
```
## 大括号风格
在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 JavaScript 中，主要有三种风格，如下：
* One True Brace Style
```js
if (foo) {
  bar()
} else {
  baz()
}
```
* Stroustrup
```js
if (foo) {
  bar()
}
else {
  baz()
}
```