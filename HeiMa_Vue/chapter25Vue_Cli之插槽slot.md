# 一、什么是插槽

## ①插槽的定义

- 插槽就是父组件向子组件传递dom结构，父组件定义好html代码，在父组件中解析完成（如css，变量等）之后传给子组件.在子组件中定义<slot>标签，父组件传递过来的dom就会替换<slot>标签所在的位置，如果父组件没有传递dom，那么子组件就默认显示<slot>标签体中的内容

```
<Student>
	这里写传递给子组件的dom，不能在这里写操作子组件数据的代码，因为是在父组件中解析完成确定了dom结构之后才传给子组件的。如果写操作子组件的代码，在解析的时候会拿不到数据。并不是把代码传过去，根据子组件的数据生成dom的
</Student>
```

## ②插槽的分类

- 默认插槽：子组件只有一个slot标签，父组件传递的所有dom都放在这个位置

- 具名插槽：子组件由多个slot标签，并且有名字，父组件在传递dom的时候需要指定传递给子组件的哪一个slot

- 作用域插槽：父组件给子组件传递结构，但是这些结构却不能操作子组件的数据，子组件需要把数据传给父组件，父组件根据数据生成dom再传递给子组件，这就是作用域插槽

  ```vue
  =================Student子组件=================
  
  /*定义一个叫做'dizhi'的数据传递给插槽的使用者，即父组件*/
  <slot :dizhi="addrs"  name="aaa">
      <div>父组件没有传递dom我就是默认内容</div>
  <slot>
      
  data(){
  	return {
      	addrs:'北京'
      }    
  }
      
      
  =================App父组件=================
      
  <Student>
          //如果父组件想要得到子组件的数据必须使用template标签，并使用scope接收，接收支持解构赋值
          <template slot="aaa" scope='dizhi'>//生成的dom会插入到子组件名字叫'aaa'的插槽中
          	{{dizhi}}
          </template>
  </Student>
      
  ```
  
  **总结**
  
  ```markdown
  *默认插槽与具名插槽：根据父组件的数据生成结构传递给子组件
  
  
  *作用域插槽：父组件根据子组件传递的数据生成dom然后传递给子组件
  
  
  作用插槽可以用来定义通用组件
  ```
  
  

