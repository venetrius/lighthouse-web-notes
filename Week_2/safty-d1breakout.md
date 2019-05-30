### enviroment


### access token safely
* GITHUBTOKEN=<token> node someapp.js
      // it will create a enviroment var GITHUBTOKEN for the lifecycle of the called app
* GITHUBTOKEN=<token> //
* .env file   require("dotenv").config()    -> it will load the content of .env into the enviroment


process.env.ENV_VARIABLE


darksky.net
free

var name = "gergely"
`My name is ${name}. This syntac is part of the ES6`