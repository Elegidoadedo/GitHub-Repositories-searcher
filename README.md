HOW TO CREATE ENVIROMENT VARIABLES FOR RUN THIS PROJECT

1. create a .env file in the project folder ( Be carefull not to create it inside src folder)
2. create a variable called REACT_APP_URI, it will contain the github grahqpl endpoint.
  REACT_APP_URI = https://api.github.com/graphql
3. create a auth token in github. If you don't know how to created it. Follow this guide -> https://docs.github.com/es/github/authenticating-to-github/creating-a-personal-access-token.
4. create the variable REACT_APP_TOKEN  and assign to the github token, to create the bearer token for the queries. ( Copy the token but don't add bearer, the app will do for you.)
REACT_APP_TOKEN = xxxxxxxxxxxxxxx

And that's all, you have set up the app to play with it.