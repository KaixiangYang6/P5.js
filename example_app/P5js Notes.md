**Terminal进入example_app文件夹，在其内执行$ node server.js，return “It works”。浏览器内打开http://localhost:3000/才可以正常工作。在html内更换js文件无需再次执行server.js，刷新浏览器即可**

put it in comments//把它放到注释里

**createCanvas(windowWidth, windowHeight)** //used for web editor


draw()的刷新速度是默认60fps

let happyPuppy  //declare variable
function setup(){
    happyPuppy = 100; //This is called assignment operation. assign the value 100 to the variable happyPuppy. store the value 100 in the variable happyPuppy.
}

x = x + 5;
x += 5;

x = x + 1;
x += 1;
x ++;
  

println("");    //用于监看

fill(R,G,B,Alpha);//RGB value, transparency

map(vvariable, Min, Max, targetMin, targetMax)

image(img, coordinate, coordinate, (size, size)) //image(img, 显示坐标，显示坐标，(图片尺寸，图片尺寸))

createGraphics(W, h) //创建新的p5渲染对象，同时画一个off-screen图形缓存

//在连续if else中，**注意布尔条件的顺序，从上到下需要从大到小满足范围逐渐扩大**，而不是满足范围逐渐缩小（x>250,x?150,x>50），否则会影响结果，结果之间互不共存。
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

**//and:&& or:||**
ellipse(x, 200, 100, 100);
if (x > width || x < 0 ){
    speed = speed * -1
} 
x = x + speed //小球中心将在到达边缘时反向移动


mouseIsPressed //to test if the mouse is being held down, used as a condition for determining true or false 
mousePressed   //for the event, **the moment** when the mouse is being clicked, all the stuff that happens after that is it being held down? used as a condition for determining true or false 
