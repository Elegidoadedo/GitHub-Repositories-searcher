# GITHHUB REPOSITORIRES SEARCH

This a simple searche by name of public repositories in Github. For the moment can search my own projects and public ones. 
You can check it here:

[WEBSITE IN VERCEL](https://github-repositories-searcher.jmoralesmnz.vercel.app/)


## HOW TO CREATE ENVIROMENT VARIABLES FOR RUN THIS PROJECT

1. Create a .env file in the project folder ( Be carefull not to create it inside src folder)
2. Create a variable called REACT_APP_URI, it will contain the github grahqpl endpoint.
  ```
  REACT_APP_URI = https://api.github.com/graphql
  ```
3. Create a auth token in github. If you don't know how to created it. Follow [THIS GUIDE](https://docs.github.com/es/github/authenticating-to-github/creating-a-personal-access-token.)

4. Create the variable REACT_APP_TOKEN+  and assign to the github token, to create the bearer token for the queries. ( Copy the token but don't add bearer, the app will do for you.)
```
REACT_APP_TOKEN = xxxxxxxxxxxxxxx
```
And that's all, you have set up the app to play with it.