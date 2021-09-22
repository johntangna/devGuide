# 命名规范
* 组件文件名
如果是组件文件，则使用PascalCase，e.g MyComponent.vue
如组件是一个目录，则主文件命名为index，e.g index.js
* 引用命名
vue组件使用PascalCase，组件实例使用CamelCase
```
bad
import foobar from 'FooBar'

good
import FooBar from 'FooBar'

bad
const Foo = Foo()

good
const foo = Foo() 
```
* 组件命名
   * 基础组件采用多个单词组合而成，避免与现有或者未来的html元素冲突
   * 如果文件夹下有根组件，父组件使用index.vue命名，子组件建立component放置子组件，副作用函数放置在effect文件中
   * 不能用简写来命名，编辑器的自动补全已经带来方便，使用简写会造成晦涩难懂的后果
* 属性命名
   * 在JS中使用camelCase，而在html元素中使用kebab-case
```
bad
props： {
  'geeting-text': String
}
<WelcomeMessage geetingText="hi"/>

good
props: {
  geetingText: String
}
<WelcomeMessage geeting-text="hi" />
```
