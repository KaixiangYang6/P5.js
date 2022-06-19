# Shared drawing app

Simple shared drawing app for Creative Technology Lab use. Uses p5.js, Socket.io and Node.js. 

Code following:
https://www.youtube.com/watch?v=bjULmG8fqc8

Edits for deployment following:
https://github.com/devansvd/whiteboard-socketio
https://devcenter.heroku.com/articles/node-websockets

App lives on address: https://sheltered-springs-38272.herokuapp.com/

Note: when deploying on Heroku, running this on the terminal is crucial:

`heroku features:enable http-session-affinity`

It opens communication ports for websockets.

NEXT STEPS:

-Try a) photo sharing b) collaborative typing and make separate js and html files for them. 
-Once these tested, make a tutorial for a) drawing bits b) git init and simple git commits c) pushing to heroku

