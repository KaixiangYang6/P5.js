# P5.js Notes

程序编写需要注意：  
modularity模块性 参考 <3. Define a Function.js>  

reusability可重用性 参考 <4. Reusebility.js>

## 文件运行准备

**Terminal进入example_app文件夹，在其内执行$ node server.js，return “It works”。浏览器内打开<http://localhost:3000/>才可以正常工作。在html内更换js文件无需再次执行node server.js，刷新浏览器即可**

也可以在终端内打开合适的文件夹，执行``$ p5 generate -b 新建文件夹名称`` 创建一个新的。


### 英语短句

comment v.注释掉
put it in comments  把它放到注释里  
execute a function  执行函数  
The class is a generic template.  类是一个通用模版
assignment operation  赋值操作
it is assigned to the diameter of the circle.  它被分配给/赋值给圆的直径。
iterate over every element of the array 迭代/重复数组中的每个元素
write into html file

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

```js
print("");    //用于监看

fill(R,G,B,Alpha);//RGB value, transparency

map(vvariable, Min, Max, targetMin, targetMax)

image(img, coordinate, coordinate, (size, size)) //image(img, 显示坐标，显示坐标，(图片尺寸，图片尺寸))

createCanvas(width, height) //Creates a canvas element in the document, and sets the dimensions of it in pixels. This method should be called only once at the start of setup.

createGraphics(width, height) //创建新的p5渲染对象，同时画一个off-screen图形缓存

createP //Creates a <p></p> element in the DOM with given inner HTML. Used for paragraph length text.

createDiv([html]) //<div> 元素 (或 HTML 文档分区元素) 是一个通用型的流内容容器，在不使用CSS的情况下，其对内容或布局没有任何影响。

createElement('XX', 'XXXXX') //Creates element with given tag in the DOM with given content.

createSlider(min, max, [value], [step]) //value: default value of the slider (Optional)     step: step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value) (Optional)

.html("XXXX") //change content of an element。对原先html元素的文本内容进行替换，如果第二个参数是true则意为添加。

clear() //make background transparent


dist(x1, y1, x2, y2)  //返回两个坐标点的直线距离

```

在draw()函数中用于控制画布内容而变化的变量，同样可以用于控制html页面元素，变量是可以被使用的。只要把页面的元素写在draw()这个循环函数里，就会跟着一起变化。


create html element in p5.js sketch, below

```js
let canvas;
let h1;

function setup(){
  canvas = createCanvas(200, 200);
  canvas.position(x, y); //调整画布位置
  h1 = createElement('h1', 'My favorite numbers below.')
}

function mousePressed(){
  createP ("My favorite number is " + random(0, 10));
}

function draw(){
  clear();  //clear the canvas
  //background(0);
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
}
```

callback example, interactive slider and text, below
注意在使用滑块和文本框的值的时候，``input.value()``需要加括号

```js
let bgcolor;
let button;
let slider;
let input;
let nameP;

function setup(){
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("go go");  //assign an element to a variable
  button.mousePressed(changeColor);  //use mousePressed() method, and execute changeColor(), when mousePress.
  nameP = createP('Your name!');
  slider = createSlider(10, 100, 50);
  input = createInput('type your name');
}

function changeColor(){
  bgcolor = color(random(255));
}

function draw(){
  background(bgcolor);
  fill(255, 100, 135);
  noStroke();
  ellipse(100, 100, slider.value(), slider.value());
  nameP.html(input.value());  //.html替换文本内容
  text(input.value(), 10, 15);
}
```

The `.changed()` function is called when the value of an element changes. This can be used to attach an element specific event listener.
`changed(fxn)`fxn: function to be fired when the value of an element changes.
`.input` event happens anytime the content of the text box changes.
参考<over, out,  change,  input.js>

```js
function setup() {
  nameInput = createInput('type your name');
  nameSize = createSlider(10, 64,16);

  nameP.mouseOver(overpara);
  nameP.mouseOut(outpara);
  slider.inpt(updateSize);

  // nameInput.input(updateText);
  nameInput.changed(updateText); //一旦nameInput被改变将会执行updateText函数。
}

function updateText() {
  nameP.html(nameInput.value());
}

function updateSize(){
  paragraph.style("font-size", slider,value()+"pt");  //注意字体大小需要用双引号加pt
}
```

注意在以上示例中，在mouseOver，mouseOut，changed这些待触发的method括号里的都是函数名，没有括号。这意味着这些函数也是在等待触发状态，不要加括号。
This is a very tricky thing about JavaScript, but there is a big difference between: "functionName" and "functionName()".  With the parentheses, this means "execute the function right now!"  Without the parentheses it means "here is a reference to a function which could be executed at some time later."  In the case of mouseOver() you just want to pass a reference to the function so that it can be executed behind the scenes when the mouse rolls over later.  In JavaScript, functions are just another data type you can store in a variable. The following are equivalent:

```js
function hello() { 
} 
var hello = function() {
}
```
















## CSS & HTML

如果想要html文件读取`style.css`文件需要在头部里写上

```html
<link href="/style.css" rel="stylesheet" />
```

### File Path	Examples
- <img src="picture.jpg">	The "picture.jpg" file is located in the same folder as the current page
- <img src="images/picture.jpg">	The "picture.jpg" file is located in the images folder in the current folder
- <img src="/images/picture.jpg">	The "picture.jpg" file is located in the images folder at the root of the current web
- <img src="../picture.jpg">	The "picture.jpg" file is located in the folder one level up from the current folder



js文件的优先级要高于css文件，将会覆盖css的视觉效果。
html里写的内容会排列在js写的内容前面。

`padding`CSS 简写属性控制元素所有四条边的**内边距区域**。
`margin`属性为给定元素设置所有四个（上下左右）方向的**外边距**属性。

```css
P{
  background: #000;
}
```

```js
var bgcolor;
var button;
var txt;

function setup() {
  createCanvas(200, 200);
  bgcolor = color(51);
  txt = createP('some text');
  txt.mouseOver(changeStyle); //鼠标悬停时改变
  txt.mouseOut(revertStyle);  //鼠标离开时，恢复

  button = createButton('go');
  // button.mousePressed(changeStyle);
}

function changeStyle() {
  txt.style('background-color', 'pink');
  txt.style('padding', '24px');
}

function revertStyle() {
  txt.style('background-color', 'purple');
  txt.style('padding', '8px');
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, 50, 50);
}
```

在CSS文件中去指定HTML中的元素时，有3种情况
html中的tage用`tageType`，id用`#idName`，class用`.className`

```html
<body>
  <p id = "unicorn" class = "rainbow"> A unicorn and rainbows! </p>
  <p class = "rainbow"> Rainbows!!</p>
  <p class = "rainbow"> More rainbows!!</p>
  <p>Just a plain paragraph</p>
</body>
```
在html文件里设置style的话，一般在`<head>`里的`<script>`之后添加。

```html
  <script></script>
  <style>
    #unicorn {
      font-szie: 16pt;
    }
    .rainbow {
      font-size: 24pt;
    }
    p {
      font-size: 12pt;
    }
  </style>
```

js里可以用`select('name')`去编辑html里的内容，或者访问、使用那个元素。

```js
function setup(){
  var paragraph = select('#unicorn');
  paragraph.style('background-color', '#F0F');
}
```

如果直接用`select('TagName')`，将会选择标签里的第一个，比如好多`<p></p>`，将会选择第一个`<p>`。
如果要选择所有`tag`，使用`selectALL('p')`，这个function返回的是数组。
`this`将会自动指代数组的当前对象上，执行语句。

```js
let paragraphs;

function setup(){
  paragraphs = selectALL('p');
  for (var i =0; i < paragraphs.length; i++){ //给selectALL()返回的整个数组执行mouseOver。
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
  }
  function highlight(){
    this.style('background-color', '#F0F');
  }
  function unhighlight(){
    this.style('background-color', '#FFF');
  }
}
```

通过使用`.parent()`将DOM插入到目标html位置中。通过html的tag, class, id即可，使用id时无需使用pound井号键如下：

```html
<p id = "canvasp">This parant should include the canvas.</p>
<p id = ".canvasp">This parant should include the canvas.</p>
<p id = "p">This parant should include the canvas.</p>
```

```js
function setup(){
  var canvas = createCanvas(400, 400);
  canvas.parent('canvasp');
}
```

以下为另一个案例

```html
<ol>
  </ol>
<button id = "button">Make a happy thing</button>
```

```js
var happy = ['rainbow', 'unicorn', 'purple', 'bacteria'];

function setup() {
  noCanvas();
  var button = select('#button'); //access the button created in html page by id
  button.mousePressed(addItem);
}
function addItem() {
  var r = floor(random(0, happy.length));
  var li = createElement('li', happy[r]); //创建叫做“li”的元素，并赋予内容。
  li.parent('happylist'); //将元素插入到happylist的位置上。语句意思是：元素的父集是happylist。
}
```


`XXXX.parent()`参数为空时，将返回XXX的父集名称，所以可以用下面案例里的这个方法去调整父集关系：

```js
// var p;

function setup() {
  noCanvas();
  for (var i = 0; i < 5; i++) {
    var p = createP('This is a link: ');
    p.style('background-color', '#CCC');
    p.style('padding', '24px');

    var a = createA('#', 'apples');
    a.mousePressed(addPhoto);
    a.parent(p);
  }
}

function addPhoto() {
  var img = createImg('appleImage.jpg');
  img.size(100, 100);
  var paragraph = this.parent();  //获得当前元素的父集

  img.parent(paragraph);  //再将父集赋给image
}
```

如何将创建好的DOM，放到数组里并进行隐藏或者删除

```js
// var p;
var images = [];
function setup() {
  noCanvas();
  for (var i = 0; i < 5; i++) {
    var p = createP('This is a link: ');
    p.style('background-color', '#CCC');
    p.style('padding', '24px');

    var a = createA('#', 'apples');
    a.mousePressed(addPhoto);
    a.parent(p);
  }

  var button = select('#clear');  //指定DOM
  button.mousePressed(clearStuff);  //对
}
function clearStuff() {
  for (var i = 0; i < images.length; i++) {
    images[i].remove(); //把数组里的对象挨个删除
    // images[i].hide();  //把数组里的对象挨个隐藏
  }
  images = [];
}
function addPhoto() {
  var img = createImg('appleImage.jpg');
  images.push(img); //把DOM放进数组里
  img.size(100, 100);
  // img.parent(p);
  // img.parent(this);
  var paragraph = this.parent();
  img.parent(paragraph);
}
```





在js中assign a CSS Class dynamically，切换DOM元素的类名称

```html
  <head>
    <style>

      .apple {
        font-size: 24pt;
        background-color: #F00;
        color: #FFF;
        padding: 24pt;
      }
      .blueberry {
        font-size: 24pt;
        background-color: #00F;
        color: #FFF;
      }
    </style>
  </head>

```

```js
function setup() {
  for (var i = 0; i < 10; i++) {
    // var p = createP('apples');
    var p = createA('#', 'apples'); //pound means no link here, it can be click but no reaction.
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x, y);
    p.class('apple');
  }

  for (i = 0; i < 10; i++) {
    // var p = createP('blueberries');
    // var p = createA('http://google.com', 'blueberries')
    p = createA('#', 'blueberries');
    x = floor(random(windowWidth));
    y = floor(random(windowHeight));
    p.position(x, y);
    p.class('blueberry');
    p.mousePressed(becomeApple);
  }
}

function becomeApple() {
  this.removeClass('blueberry');  //去除当前类名称
  this.class('apple');  //添加新的类名称
}

function draw() {}
```

在htlm中<span>和<div>相似都是无意义的插入元素，span是在标签中，div是在标签外

### HTML 4 Entity Names特殊符号代码

> reference: <https://www.w3schools.com/charsets/ref_html_entities_4.asp>




















## if else

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







## and:&& or:||

```js
ellipse(x, 200, 100, 100);
if (x > width || x < 0 ){
    speed = speed * -1  //小球中心将在到达边缘时反向移动
}
x = x + speed 
```

The **mouseClicked()** function is called once after a mouse button has been pressed and then released. This function is only guaranteed to be run when the left mouse button is clicked.

The **mouseReleased()** function is called every time a mouse button is released. If no mouseReleased() function is defined, the touchEnded() function will be called instead if it is defined.

**mouseIsPressed()** //to test if the mouse is being held down, used as a condition for determining true or false

**mousePressed()**   //global event. For the event, **the moment** when the mouse is being clicked, all the stuff that happens after that is it being held down? It can be used as a condition for determining true or false.

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
        this.y = y;//当前类的y属性等于构造函数的y变量值。
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

## Image使用方法

参考<8. Objects and Images.js> 理通逻辑很重要。

  预加载，提前加载好图片随时调用。loadImage('文件夹命名/文件命名')

  ```js
let flower;
let kittens = [];

  function preload(){
    flower = loadImage('kittens/flower.png')
    for (let i = 0; i <5; i++){
      kittens[i] = loadImage('kittens/kitten'+i+'.jpg');
      kittens[i] = loadImage(`kittens/kitten${i}.jpg`); //或者
    }
  }
  ```


> 小结  
> 至此7.8节的教程全部结束，应该掌握类中构造函数，功能函数的创建和调用，数组和数组中元素的运用，对数组进行控制的逻辑。8. Objects and Images.js这个文件对于梳理逻辑非常重要，需要上下结合进行逻辑梳理。
