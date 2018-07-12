Open 2 command prompts.

CMD #1: npm start // this will start React on Localhost:3000

CMD #2: node server // this will start the NodeJS Server on Localhost:5000

Prerequisites:

a) be sure you've created a new SQL Database with the file in the root directory called 'Database.sql'

b) Install the <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en">Redux DevTools Chrome Extension</a>.

<img src="screenshot.png">

Up to 1:06:00 in the <a href="https://www.youtube.com/watch?v=93p3LxR9xfM">Traversy Tutorial on Redux</a>

Using this NodeJS API: http://koalacms.herokuapp.com/api/messages taken from another Repo I made about a <a href="https://github.com/ElishaKay/MySQL-Node-Angular">NodeJS CMS.</a>

<img src="redux-messages.png">


The latest messages are immediately added to the state, which calls "MapStatetoProps[of the Component]" , and the Props of the Component pass it on to the DOM.

Form onSubmit event (vanillaJS-based) => Action => Reducer => Mapping State (of Application) to the Props of the Component => DOM Itself getting updated.

<img src="adds-to-list.png">


Tips for Deployment: Use <a href="https://stackoverflow.com/questions/46803442/concurrently-run-express-and-create-react-app-issue">Concurrently</a> or you'll have to deploy to two servers (one for Create React App and one for NodeJS API).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


------------------------

Question: When is a component re-rendered?

<img src="state-and-rerendering.png">

Answer: A re-render can only be triggered if a component’s state has changed. The state can change from a props change, or from a direct setState change. The component gets the updated state and React decides if it should re-render the component. Unfortunately, by default React is incredibly simplistic and basically re-renders everything all the time.

Component changed? Re-render. Parent changed? Re-render. Section of props that doesn't actually impact the view changed? Re-render.

Source: http://lucybain.com/blog/2017/react-js-when-to-rerender/

___________________________________________________

<a href="http://babeljs.io/repl">Good resource for understanding how JSX is converted into a React.createElement function</a>

<img src="babel-repl.JPG">