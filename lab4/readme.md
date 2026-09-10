# NPM Project

1. Create project folder.
2. Right click on project folder and select in integrated terminal.
3. Type in terminal `npm init -y` and press enter.
4. Open package.json file from project folder .
5. Update type as `type:module` in package.json.
6. Type in terminal`npm i nodemon -D` to install nodemon ,which restarts server while file changes. -D flag indicate install in dev dependency.
7. It creates node_modules folder and package lock.JSON.
8. Update .gitignore file and write project-folder/node_modules.
9. Update package.Json to run the object, update script property as 
```"scripts": {
    "start":"node app.js",
    "dev":"nodemon app.js"
  },
  ```
10. Now you can start the server by typing `npm run dev` in the terminal of project folder.