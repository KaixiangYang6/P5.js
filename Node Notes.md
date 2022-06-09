## Node相关概念

本练习的目的是使用服务器端的编程和P5.js创意编程实现多用户之间的实时交互

>Node（正式名称 Node.js）是一个开源的、跨平台的运行时环境，有了它，开发人员可以使用 JavaScript 创建各种服务器端工具和应用程序。此运行时主要用于浏览器上下文之外>（即可以直接运行于计算机或服务器操作系统上）。据此，该环境省略了一些浏览器专用的 JavaScript API，同时添加了对更传统的 OS API（比如 HTTP 库和文件系统库）的支持。  

>socket是一种连接，在服务器和客户端之间交换数据

>Express 是最流行的 Node 框架，是许多其它流行 Node 框架 的底层库。它提供了以下机制：
为不同 URL 路径中使用不同 HTTP 动词的请求（路由）编写处理程序。
集成了“视图”渲染引擎，以便通过将数据插入模板来生成响应。
设置常见 web 应用设置，比如用于连接的端口，以及渲染响应模板的位置。
在请求处理管道的任何位置添加额外的请求处理“中间件”。  
Express对于Node而言是放在NPM中的一个包而已。

## 英语语句

set up a configuration file 设置配置文件

Node需要下载安装<https://nodejs.org/zh-cn/>

## 终端Terminal命令语句&快捷键

`$ ls` 列出当前文件夹内文件
`$ clear` 清空历史

ctrl+c中止当前进程，常用于执行npm安装其他库的命令前，终止当前进程，再进行安装。

## 命令执行

参考<https://lab.arts.ac.uk/books/web-technology/page/web-app-template-for-beginners>

1. 在vs code内，创建根文件夹，命名不要使用空格，使用`_`。
2. 创建server.js文件public子文件夹。并在public文件夹内按照一下内容创建文件。

   ```js
   public
      index.html
      sketch.js
      styles.css
   server.js
   ```

3. 在vs code的终端内，使用`$ cd 文件地址(右键左边栏的文件夹，选择copy path)`进入文件夹内，执行`$ npm init`，按照提示输入信息，将创建一个package.json文件。npm是node package manager的缩写，需要它去安装Express，设置并管理项目的配置文件/库。

4. 在server.js文件中输入

   ```js
   const express = require("express"); //在server.js文件内调用express包
   const app = express();              //将其赋给变量
   const server = app.listen(3000);    //
   app.use(express.static("public"));  //加载静态文件，含有html、css、sketch文件的文件夹
   console.log("It works");
   ```

5. 终端再执行`$ npm install express --save`为项目安装Express包，安装完整后可以在json文件的dependencies开发依赖下看到express。**这一步产生package-lock.json文件和node_module文件夹。**

6. 终端执行`$ node server.js`，之后打开浏览器输入<localhost:3000>，如果是空白的，但没有显示报错。那么到目前为止这是顺利的，只是暂时没有内容显示。

7. 到空的html文件内添加

   ```html
    <!DOCTYPE html>
    <html>
       <head>
          <meta charset="utf-8" />
          <title>Node.js test</title>
       </head>
       <body>
          <h1>Node.js practice</h1>
       </body>
    </html>
   ```

   完整版：自行添加需要用到的库url链接。

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <meta charset="utf-8" />
      <title>JS Practice</title>
       <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
   </head>

   <body>
     <h1>JS practice</h1>
     <script src="sketch.js"></script>
   </body>

   </html>
   ```

8. 重新刷新浏览器<localhost:3000>, 将会看到 Node.js practice

9. 目前设置完了html框架，需要调用p5.js的库，来在项目中使用p5.js。如果需要用其他的库，如ML5, Three.js写三维的东西都在这里调用。此处的在线库是从CDN(Content Delivery Network)中获得的，在此网页中查看P5.js的CDN<https://p5js.org/get-started/>  

   在`<head>`部分的`<title>`行之后，添加  

   ```html
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>
   ```

   这样这一部分看起来就像是现在的这个样子

   ```html
   <head>
     <meta charset="utf-8" />
     <title>My test project</title>
     <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js">  </script>
   </head>
   ```

10. html文件相当于绘画的画框，sketch.js决定绘画的具体内容。需要在`<body>`部分添加，也可以在`<head>`部分添加

    ```html
     <body>
      <h1>My first title!</h1>
      <script src="sketch.js"></script>
     </body>
    ```

    ```html
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
        <script src="sketch.js"></script>
     </head>
     <body>
       <main>
       </main>
     </body>
    </html>
    ```

11. 在空的sketch.js文件内粘贴以下代码

    ```js
    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
       background(100);
       rectMode(CENTER);
       strokeWeight(3);
       stroke(255, 0, 0);
       fill(255, 192, 203);
       rect(100, 100, 200, 200);
    }
    ```

   刷新浏览器或者再次执行`$ node server.js`就可以正常看到内容了。

   **到此为止，这个文件夹可以用来在本地进行p5.js的运行。**

## 多端口的交互，接着上面继续

1. 安装socket包，按ctrl+C终止当前node server.js进程。再执行`$ npm install socket.io --save`

2. 在server.js文件中，调用socket包。添加以下代码

   ```js
   var socket = require('socket.io');
   ```

   并创建变量io调用socket函数，追踪server的活动events。

   ```js
   var io = socket(server);
   ```

3. 第一个活动就是追踪新用户连接

   ```js
   // Register a callback function to run when we have an individual connection
   // This is run for each individual user that connects
   io.sockets.on('connection', newConnection);//set up a connection event
   function newConnection(socket) {
    console.log('We have a new client: ' + socket.id);//every single new connection to a webserver gets autoatically assigned an ID number for tracking it over time.
    //console.log(socket); //包含了IP等其他信息，可以调用。这里只调用id
   ```

   向html文件的``<head>``部分里添加CDN库。链接在socket.io的Resources-CDN里<https://cdn.socket.io/>

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8">
       <title>Sockets Example</title>
       <script type="text/javascript" src="https://cdn.socket.io/socket.io-3.0.5.js"></script>
       <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.min.js"></script>
    
       <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/addons/p5.sound.min.js"></script>
       <script type="text/javascript" src="sketch.js"></script>

       <style>
         body {
           padding: 20px;
         }
       </style>
     </head>
     <body>
     </body>
   </html>
   ```

   并且在Client端的sketch.js文件里，执行以下案例。

   ```js
   let socket;

   function setup(){
      createCanvas(600, 400);
      background(51);
      socket = io.connect('http://localhost:3000');   //send message to the server/ip address
   }

   function draw(){
      noStroke();
      fill(255);
      ellipse(mouseX, mouseY, 36, 36);
   }
   ```

   此时将会在终端内看到``We have a new client: ' + socket.id``，刷新网页或者从新的网页打开localhost:3000都会看到新的链接出现。

4. socket.emit用来发送`活动`，socket.on用来接收`活动`。都可以从服务器端或者客户端接受或者发送。
   socket.emit(eventName[, ...args][, ack])​
   - ``eventName`` <string> | <symbol>
   - ``args`` <any[]>
   - ``ack`` <Function>
   - Returns `true`

   Emits an event to the socket identified by the string name. Any other parameters can be included. All serializable datastructures are supported, including Buffer.

   ```js
   socket.emit("hello", "world");
   socket.emit("with-binary", 1, "2", { 3: "4", 5: Buffer.from([6, 7, 8]) });
   ```

   The``ack``argument is optional and will be called with the server answer.

   Client

   ```js
   socket.emit("hello", "world", (response) => {
     console.log(response); // "got it"
   });
   ```

   Server

   ```js
   io.on("connection", (socket) => {
     socket.on("hello", (arg, callback) => {
       console.log(arg); // "world"
       callback("got it");
      });
   });
   ```


   socket.on(eventName, callback)​
   - eventName <string> | <symbol>
   - listener <Function>
   - Returns <Socket>
  
   Register a new handler for the given event.

   ```js
   socket.on("news", (data) => {
     console.log(data);
   });

   // with multiple arguments
   socket.on("news", (arg1, arg2, arg3, arg4) => {
      // ...
   });
   // with callback
   socket.on("news", (cb) => {
     cb(0);
   });
   ```

   如果callback是个函数的话，接收到的值将会直接填入到callback函数的参数里。比如:

   ```js
   // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('mouse', mouseMsg);//receive data of 'mouse'

    //接收的数值将会直接填入到mouseMsg的参数里，去继续被用来执行mouseMsg()的内容
    function mouseMsg(data) {//what is the function of the 'data' in brackets?
        // Data comes in as whatever was sent, including objects
        console.log(data);

        socket.broadcast.emit('mouse', data);//send back out the same message, and call it 'mouse'
        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");
        
    }
   ```
   






   服务器将数据发送给除发送过来数据的客户端以外的客户端

   文档：<https://socket.io/docs/v4/broadcasting-events/>

   socket.broadcast.emit(eventName[, ...args][, ack])

   **To all connected clients except the sender**

5. 直接参考public里的sketch.js文件，也就是客户端文件。和server.js服务器文件，梳理数据收发逻辑。