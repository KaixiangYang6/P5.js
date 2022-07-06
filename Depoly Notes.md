# APP部署

## Using WebSockets on Heroku with Node.js Document

<https://devcenter.heroku.com/articles/node-websockets#option-2-socket-io>


## Install Homebrew

将服务器部署到Heroku平台作为应用程序，需要先安装Homebrew，再按照Heroku文档在终端运行指令。参考下面的视频。

<https://www.youtube.com/watch?v=PiX6W3TnuSA>

## Follow this tutorial video and deploy docs of Heroku

<https://www.youtube.com/watch?v=MxfxiR8TVNU>

<https://dashboard.heroku.com/apps/node-socket-test-heroku/deploy/heroku-git>

**Notice that there are distinctions between the tutorial video and docs.**
![](IMG/Heroku%20deploy%20details.png)


创建一个procfile文件，执行web: node server.js。

`$ touch procfile`

每次对项目内容作出了修改，执行以下语句推送到Heroku

`$ git add .`

`$ git commit -m “new change”`

`$ git push heroku main`