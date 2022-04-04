# P5.js Notes

程序编写需要注意
modularity模块性 参考<3. Define a Function.js>
reusability可重用性 参考<4. Reusebility.js>

## 文件运行准备

**Terminal进入example_app文件夹，在其内执行$ node server.js，return “It works”。浏览器内打开<http://localhost:3000/>才可以正常工作。在html内更换js文件无需再次执行node server.js，刷新浏览器即可**

### 英语短句

comment v.注释掉
put it in comments  把它放到注释里  
execute a function  执行函数  
The class is a generic template.  类是一个通用模版
assignment operation  赋值操作
iterate over every element of the array 迭代/重复数组中的每个元素

### let var 的区别

reference: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let/>

```js
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

**参考上面代码案例，let严格按照层级范围block scope对变量进行定义。**

```js
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

**在程序和函数的顶层，let与var不同，不会在全局对象上创建一个属性，如上。**



## 语句&语法syntax

console.log(""); 常常用于测试，排错。在网页浏览器的开发者页面中的console中显示

**createCanvas(windowWidth, windowHeight)** //used for web editor

draw()的刷新速度是默认60fps

```js
let happyPuppy  //declare variable
function setup(){
    happyPuppy = 100; //This is called assignment operation. assign the value 100 to the variable happyPuppy. store the value 100 in the variable happyPuppy.
}
```


+=，++的使用方法

```js
x = x + 5;
x += 5;

x = x + 1;
x += 1;
x ++; //只有在加或减1的时候，才能用++或者--
```

print("");    //用于监看

fill(R,G,B,Alpha);//RGB value, transparency

map(vvariable, Min, Max, targetMin, targetMax)

image(img, coordinate, coordinate, (size, size)) //image(img, 显示坐标，显示坐标，(图片尺寸，图片尺寸))

createGraphics(W, h) //创建新的p5渲染对象，同时画一个off-screen图形缓存

dist(x1, y1, x2, y2)  //返回两个坐标点的直线距离

### if else

在连续if else中，**注意布尔条件的顺序，从上到下需要从大到小满足范围逐渐扩大**，而不是满足范围逐渐缩小（x>250,x?150,x>50），否则会影响结果，结果之间互不共存。
```js
if(boolean statement){
}else if(boolean statement){
}else if(boolean statement){
}else{
}
//如果同时使用多个if，只要同时满足各自的布尔条件，结果之间将相互共存。
if(boolean statement){
}
if(boolean statement){
}
if(boolean statement){
}
```

### and:&& or:||

```js
ellipse(x, 200, 100, 100);
if (x > width || x < 0 ){
    speed = speed * -1  //小球中心将在到达边缘时反向移动
}
x = x + speed 
```

**mouseIsPressed** //to test if the mouse is being held down, used as a condition for determining true or false

**mousePressed**   //global event. For the event, **the moment** when the mouse is being clicked, all the stuff that happens after that is it being held down? It can be used as a condition for determining true or false. 

## 构建类Class

请结合数组内容阅读

参考 <5.Create a Class.js>

1. 声明变量，在setup()中定义变量为新的类，也就是定义变量为对象。并应用自定义的参数。

   ```js
   function setup(){
     createCanvas(600, 400);
     bubble1 = new Bubble(200, 200, 40);
     bubble2 = new Bubble(400, 200 ,20);
   }
   ```

2. 声明构建函数constructor(), 基础属性property在constructor中构建，功能属性functionnality在其后**直接**构建，其中this指代当前类。自定义参数也在此声明。

   ```js
   class Bubble {
    constructor(x, y, r) {//可赋值给属性参数一个基础值，如(x, y, r=50)
        this.x = x;//this.x这类变量，相当于占位的，没有实际意义但可充当变量。
        this.y = y;
        this.r = r;
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
   }
   ```

3. 现在可以在draw()中调用对象

   ```js
   function draw(){
     bubble1.move();
     bubble1.show();
     bubble2.move();
     bubble2.show();
   }
   ```
4. 类的属性参数和功能性函数使用方法
   ```js
   dist(bubble1.x, bbubble1.y, bubble2.x, bubble2.y);//可直接在对象中调用属性参数


   ```

## 类文件与sketch文件管理
可以在文件夹根目录里，放class.js创建类的文件，和sketch.js绘制文件。在index.html文件的'body'部分执行class.js和sketch.js两个文件即可正常运行。

```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" />
      <title>P5.js Practice</title> 
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>
      
   </head>
   <body>
      <h1>P5.js Practice</h1>
      <p id='status'>change script file in index.html file</p>
      <script src="6. Array.js"></script>
   </body>
</html>
```

## 数组使用

reference: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>

参考 <6. Array_2.js>  
bubbles.push(b);    //向数组bubbles内添加对象b，添加到末尾

bubble.splice();    //splice删除从第i个起的1个对象。
注意调用push，splice这种默认函数时，是对对象应用函数，而不是对数组应用。

在splice删除数组中的对象时，倒序删除可以避免，因为删除前一个，后一个向前补位而被错过的bug。以下案例为倒序删除：

```js
function mousePressed() {
    for (let i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles.splice(i, 1); //splice删除从第i个起的1个对象。注意
        }//注意调用push，splice这种默认函数时，是对对象应用，
    }
}
```

**以上案例中，可以看到，bubbles[i].contains()中的contains是Bubble类的功能函数，bubbles[i]实际是指bubbles数组中的每个属于Bubble类的元素，所以可以直接调用Bubble类的功能函数。而bubbles.splice()中的splice属于js自带的对数组进行处理的函数指令，所以是直接对bubbles数组应用，而不是对bubbles[i]数组中的元素进行应用。**


以下案例中，对数组，对象，类的关系区分**非常重要**，在每个for循环里variable变量b都会被添加到bubbles数组中其自身清空，所以下一次得以重新创建归属于Bubble类的对象new Bubble()

```js
let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 5; i++) {
        let x = random(width);  //画布宽度内随机
        let y = random(height); //画布高度内随机
        let r = random(10, 50); //自定义大小
        let b = new Bubble(x, y, r); //创建一个对象，并将自定义的参数应用到类的原参数上
        bubbles.push(b);    //将属于Bubble类的对象b添加到bubbles数组中
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;//this.x这类变量，相当于占位的，没有实际意义但可充当变量。
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }
```

这里有一个小细节需要注意。Bubble类的constructor构造函数中，定义了x, y, r三个参数作为属性。在将b定义为Bubble类的new Bubble()对象时，需要对3个属性参数进行定义，不能让属性参数为空。如果构造函数已经赋予了属性参数基础数值，那么在新建对象时不赋值也可，只要保证不为空就行。以下为赋予r基础数值：

```js
class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
```

### For ...of array

```js
  for (let i = 0; i < bubbles.length; i++) {
  bubbles[i].show();
  bubbles[i].move();
  }
  //以上与以下for循环相同作用
  for (let b of bubbles) { //将bubbles数组中的每个b元素按照顺序执行。b代表数组中的每个元素。用于替换上面for条件里的let i = 0; i < bubbles.length; i++
    b.show();
    b.move();
  }
  ```

  将bubbles数组中的每个b元素按照顺序执行。b代表数组中的每个元素。用于替换上面for条件里的let i = 0; i < bubbles.length; i++