# React

Create the react app by using commmand
```
npm i -g create-react-app
```

Then run the following command

```
npx create-react-app react-template  --use-npm
```

To see web app inside browser run
```
npm start 
```

TO build the directory, run
```
npm run build
```

```js
function app() {
    return (
        <h1>Hello from App</h1>
    );
}

export default App;

// import react

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    document.getElementById('root')
)

```


How to get rid of error in console.

```jsx
{
    "short_name": "React Template",
    "name": "Create React App Template",
    "start-url": ".",
    "display": "standalone",
    "theme_Color": "#000000,
}
```


Routes

```jsx

const Root = () => {
    return (
        <BrowserRouter>
            <div>
            {   /* Routes */    }
            </div>
        </BrowserRouter>
    );
}

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/">
                    <App />
                </Route> 
                <Route exact path="/">
                    <App />
                </Route>
                
            </div>
        </BrowserRouter>
    );
}



