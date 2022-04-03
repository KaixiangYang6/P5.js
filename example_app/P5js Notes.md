# P5.js Notes

程序编写需要注意
modularity模块性 参考<3. Define a Function.js>
reusability可重用性 参考<4. Reusebility.js>

## 文件运行准备

**Terminal进入example_app文件夹，在其内执行$ node server.js，return “It works”。浏览器内打开<http://localhost:3000/>才可以正常工作。在html内更换js文件无需再次执行node server.js，刷新浏览器即可**

### 英语短句

put it in comments//把它放到注释里  
execute a function//执行函数  
the class is a generic template.  

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

**createCanvas(windowWidth, windowHeight)** //used for web editor

draw()的刷新速度是默认60fps

赋值操作assignment operation

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

**mousePressed**   //for the event, **the moment** when the mouse is being clicked, all the stuff that happens after that is it being held down? used as a condition for determining true or false

## 构建类Class

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
    constructor(x, y, r) {
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

## 类文件与sketch文件管理
可以在文件夹根目录里，放class.js创建类的文件，和sketch.js绘制文件。在index.html文件的<body>部分执行class.js和sketch.js两个文件即可正常运行。
