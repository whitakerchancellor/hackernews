This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

In our computer science senior seminar at Eastern Kentucky University, the students created their first React application by following the source code in the Road to Learn React book. We added our applications to GitHub. Then we set up continuous integration by adding Travis CI to our GitHub accounts. We added enzyme tests to our application. Then we used Travis CI to automatically build our applications and deploy them on GitHub Pages. We were then instructed to work in pairs and add pull requests to our partner's application. We forked our partner's repository, installed their project, and if it was broken, submitted a pull request fixing their project. We added two enzyme tests to their project and issued a pull request. Then we issued a pull request to make the last search term in the application be remembered when it is reloaded.

## Technical Features

From the Road to Learn React book, We learned how to bootstrap our own React application. We were introduced to JSX and ES6, we learned React basics like internal component state and unidirectional data flow, how to fetch data from an API, how to do snapshot tests with Jest and unit tests with Enzyme, advanced React components such as higher order components, and state management. We learned continuous integration by adding Travis CI to our GitHub accounts, and learned automatic deployment with Travis CI and GitHub Pages.

## Screenshots

What the application looks like when it has been launched. You can filter the table by typing in a new search term and hitting the Search button. If you reload the application, the last search term will be remembered. You can dismiss a search result by hitting the Dismiss button on a search result.
![](/images/Screenshot1.PNG)

If the search exceeds 100 results, you can scroll down to the bottom and hit the More button to load more results.
![](/images/Screenshot2.PNG)

## Try Out

https://whitakerchancellor.github.io/hackernews/

## Contributions

Thanks Evan T. Wright (github.com/EvanTWright) for the pull request that added functionality to save the last search term and added grey lines to every other row in the table in my application. Thanks also for the other pull request that added two enzyme tests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
