
# 语言规范

JavaScript 是一种客户端脚本语言，这里列出了编写 JavaScript 时需要遵守的规则。

## 类型

* 原始类型: 存取原始类型直接作用于值本身
    * 布尔类型
    * Null 类型
    * Undefined 类型
    * 数字类型
    * BigInt 类型
    * 字符串类型
    * 符号类型 Symbol
```js

const foo = 2
let bar = foo

bar = 1
console.info(foo, bar)

```

* 复杂类型: 访问复杂类型作用于值的引用
    * object
    * array
    * function
```js
const foo = [1, 2, 3]
const bar = foo

bar[0] = 9

console.log(foo[0], bar[0]) // 9, 9
```

## 引用
* 请记得 `const` 和 `let` 都是块级作用域，`var` 是函数级作用域
```js
// const and let only exist in the blocks they are defined in.
{
  let a = 1
  const b = 1
}
console.log(a) // ReferenceError
console.log(b) // ReferenceError
```
* 对所有引用都使用 `const`，不要使用 `var`
:::info
原因：这样做可以确保你无法重新分配引用，以避免出现错误和难以理解的代码
:::
```js
// bad
var a = 1
var b = 2

// good
const a = 1
const b = 2
```
* 如果引用是可变动的，使用 `let` 代替 `var`
:::info
原因：`let` 是块级作用域的，而不像 `var` 属于函数级作用域
:::
```js
// bad
var count = 1
if (count < 10) {
  count += 1
}

// good
let count = 1
if (count < 10) {
  count += 1
}
```
## 对象
* 请使用字面量值创建对象
```js
// bad
const a = new Object{}

// good
const a = {}
```
* 别使用保留字作为对象的键值
```js
// bad
const a = {
  default: {},  // default 是保留字
  common: {}
}

// good
const a = {
  defaults: {},
  common: {}
}
```
* 当使用动态属性名创建对象时，请使用对象计算属性名来进行创建
:::info
原因：因为这样做就可以让你在一个地方定义所有的对象属性
:::
```js
function getKey(k) {
  return `a key named ${k}`
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco'
};
obj[getKey('enabled')] = true

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true
};
```
* 请使用对象方法的简写方式
```js
// bad
const item = {
  value: 1,

  addValue: function (val) {
    return item.value + val
  }
}

// good
const item = {
  value: 1,

  addValue (val) {
    return item.value + val
  }
}
```
* 请使用对象属性值的简写方式
:::info
原因：这样更简短且描述更清楚
:::
```js
const job = 'FrontEnd'

// bad
const item = {
  job: job
}

// good
const item = {
  job
}
```
* 将简写的对象属性分组后统一放到对象声明的开头
:::info
原因：这样更容易区分哪些属性用了简写的方式
:::
```js
const job = 'FrontEnd'
const department = 'JDC'

// bad
const item = {
  sex: 'male',
  job,
  age: 25,
  department
}

// good
const item = {
  job,
  department,
  sex: 'male',
  age: 25
}
```
* 只对非法标识符的属性使用引号
:::info
原因：因为通常来说我们认为这样主观上会更容易阅读，这样会带来代码高亮上的提升，同时也更容易被主流 JS 引擎优化
:::
```js
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5
}

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5
}
```
* 不要直接使用 `Object.prototype` 的方法, 例如 `hasOwnProperty`, `propertyIsEnumerable` 和 `isPrototypeOf` 方法
:::info
原因：这些方法可能会被对象自身的同名属性覆盖 - 比如 { hasOwnProperty: false } 或者对象可能是一个 null 对象(Object.create(null))
:::
```js
// bad
console.log(object.hasOwnProperty(key))

// good
console.log(Object.prototype.hasOwnProperty.call(object, key))

// best
const has = Object.prototype.hasOwnProperty // cache the lookup once, in module scope.
console.log(has.call(object, key))
/* or */
import has from 'has' // https://www.npmjs.com/package/has
console.log(has(object, key))
```
* 优先使用对象展开运算符 ... 来做对象浅拷贝而不是使用 Object.assign，使用对象剩余操作符来获得一个包含确定的剩余属性的新对象
```js
// very bad
const original = { a: 1, b: 2 }
const copy = Object.assign(original, { c: 3 }) // this mutates `original` ಠ_ಠ
delete copy.a // so does this

// bad
const original = { a: 1, b: 2 }
const copy = Object.assign({}, original, { c: 3 }) // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 }
const copy = { ...original, c: 3 } // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy // noA => { b: 2, c: 3 }
```
## 数组
* 请使用字面量值创建数组
```js
// bad
const items = new Array()

// good
const items = []
```
* 向数组中添加元素时，请使用 `push` 方法
```js
const items = []

// bad
items[items.length] = 'test'

// good
items.push('test')
```
* 使用展开运算符 `...` 复制数组
```js
// bad
const items = []
const itemsCopy = []
const len = items.length
let i

// bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i]
}

// good
itemsCopy = [...items]
```
* 把一个可迭代的对象转换为数组时，使用展开运算符 `...` 而不是 `Array.from`
```js
const foo = document.querySelectorAll('.foo')

// good
const nodes = Array.from(foo)

// best
const nodes = [...foo]
```
* 使用 `Array.from` 来将一个类数组对象转换为数组
```js
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 }

// bad
const arr = Array.prototype.slice.call(arrLike)

// good
const arr = Array.from(arrLike)
```
* 遍历迭代器进行映射时使用 `Array.from` 代替扩展运算符 `...,` 因为这可以避免创建中间数组
```js
// bad
const baz = [...foo].map(bar)

// good
const baz = Array.from(foo, bar)
```
* 使用数组的 `map` 等方法时，请使用 `return` 声明，如果是单一声明语句的情况，可省略 `return`
```js
// good
[1, 2, 3].map(x => {
  const y = x + 1
  return x * y
})

// good
[1, 2, 3].map(x => x + 1)

// bad
const flat = {}
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
  const flatten = memo.concat(item)
  flat[index] = flatten
})

// good
const flat = {}
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
  const flatten = memo.concat(item)
  flat[index] = flatten
  return flatten
})

// bad
inbox.filter((msg) => {
  const { subject, author } = msg
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee'
  } else {
    return false
  }
})

// good
inbox.filter((msg) => {
  const { subject, author } = msg
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee'
  }

  return false
})
```
* 如果一个数组有多行则要在数组的开括号后和闭括号前使用新行
```js
// bad
const arr = [
  [0, 1], [2, 3], [4, 5]
]

const objectInArray = [{
  id: 1
}, {
  id: 2
}]

const numberInArray = [
  1, 2
]

// good
const arr = [[0, 1], [2, 3], [4, 5]]

const objectInArray = [
  {
    id: 1
  },
  {
    id: 2
  }
]

const numberInArray = [
  1,
  2
]
```
## 解构赋值
* 当需要使用对象的多个属性时，请使用解构赋值
> 原因：解构可以避免创建属性的临时引用
```js
// bad
function getFullName (user) {
  const firstName = user.firstName
  const lastName = user.lastName

  return `${firstName} ${lastName}`
}

// good
function getFullName (user) {
  const { firstName, lastName } = user

  return `${firstName} ${lastName}`
}

// better
function getFullName ({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}
```