# 注释规范
> Comments begin with the characters /* and end with the characters */. They may occur anywhere outside other tokens, and their contents have no influence on the rendering. Comments may not be nested.
* 注释以字符 /* 开始，以字符 */ 结束
* 注释不能嵌套
```css
/*Comment Text*/
```
## 团队约定
### 单行注释
注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行
```css
good
/* Comment Text */
.jdc{}

/* Comment Text */
.jdc{}

bad
/*Comment Text*/
.jdc{
	display: block;
}
.jdc{
	display: block;/*Comment Text*/
}
```
### 模块注释
注释内容第一个字符和最后一个字符都是一个空格字符，/* 与 模块信息描述占一行，多个横线分隔符-与*/占一行，行与行之间相隔两行
```css
good
/* Module A
---------------------------------------------------------------- */
.mod_a {}


/* Module B
---------------------------------------------------------------- */
.mod_b {}

bad
/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```
### 文件信息注释
在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息
```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
 ```
