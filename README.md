# Evolve Frontend challenege

### Goal
- Food Admin Dashboard using ReactJs/Redux

### Task
- Level 1 - Admin Page ( /admin )
  - Add a dish (must include protein, carbs, fats, and calculate calories based on that)
  - Edit the dish parameters, and update calories accordingly
  - Delete a dish
  - Display all the dishes in a table format
  - Use redux to store the dishes.
  
- Level 2 – User Page
  - View all the dishes
  - Be as creative as possible, to increase the User Experience.
  - Implement Search based on dish name.
  
- Level 3 - Authorization
  - Make a dummy login page. Ask if admin or user. ( /login )
  - Only admin should be allowed to route to ‘/admin’, for others show a 404 page
  - User page should be open to all
  - Logout button to logout the user
  - Use redux for login/logout.

##  Install Dependencies
```
npm install
``` 

##  Run the app
```
# Run in development mode
npm start
``` 

## Deployment
Install `gh-pages` as *dev dependency* for the deployment of our app on **GitHub Pages**.

- Add following lines of code in `package.json` file.
```
"homepage":"http://{USER_NAME}.github.io/{NAME_OF_GITHUB_REPO}",
"name": ...


"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
	"start": ...
}
```
- Run following script to build and deploy.
```
npm run deploy
```



### Active Version
- Version: 1.0.0
- License: MIT