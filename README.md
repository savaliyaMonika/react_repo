# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React JS Learning

##  Create a React Project

        npx create-react-app my-app
## Try to run and get a working Welcome Page.
	cd my-app  // get directory on you react app
    npm start  // run react app

## Try to render data from static objects eg. Name,Surname

Create function Componet name is  StaticObjects_4

Create function StaticObjects_4

    import React from "react";

    function StaticObjects_4(){
        const name = 'Monika';
        const surname = 'Savaliya';
    
        return(
            <>
            <h1> Hi ,Good Morning</h1>
            <p>My name is {name} {surname} </p>
            </>
        );
    }
    export default StaticObjects_4;

import this Componet on App.js file 

    import StaticObjects from './StaticObjects_4';

Get  StaticObjects like one attribute 

     <StaticObjects/>

## Create blog detail layout using CSS.

Create BlogLayout_5 functional component

Create blogPosts array with title,image,body & author

    Using map() show blogs
    {blogPosts.map((blog) => (
        <div className="post-container">
             <h3 className="heading">{blog.title}</h3>
             <img className="image" src={blog.imgUrl} alt="post" />
             <h5>{blog.body}</h5>
                <div className="info">
                    <h4>Written by: {blog.author}</h4>
                </div>
        </div>
     ))}

Create css file and add css

import BlogLayout_5  on App.js

## react bootstrap

Install bootstrap

    npm install bootstrap

Check bootsrap version in package.json file in react app similar to "bootstrap": "^5.2.1"

Import css file in react app

    import 'bootstrap/dist/css/bootstrap.min.css';

Install react bootstrap

    npm i react-bootstrap

check package.json similar to "react-bootstrap": "^2.5.0"

## static array using map

Create  Arraymapping_7 componet

Create static array

Using map() show array list

     const toDoList = () => {
        return MOCK_DATA.map((item) =>
            <li key={item.id}>{item.todoItem} </li>
        )
    }

Display list 
    
     <ul >{toDoList()} </ul>

### Basic state Example

Cretae BasicUseState_9 component 

Add text box using type message

import useState in react app

Call onChage event on text box and call state 
        
        const [message, setMassage] = useState('');

Get message 

    <strong>{message}</strong>


## Show / Hide HTML tag on button click.

Create  ShowHideButton_9 component

Add two button using react bootstrap 

    import { Button } from "react-bootstrap";

On hide show button  pass true and false

Change show value using useState

Show html tag based on true false
        
## Show result of Price into Quantity

Create PriceQuantity_9 component

Add two text inpout adn add onChange event using useState

multiplay two state value. 

## Add Dropdown menu and make Time Converter & Celsius to Fahrenheit converter

Create DropdownMenu_9 componet

Add one dropdown and its's  value is Time and Celsius

Add usdState on dropdown onchanege 

Add Fformula in dropdown value using condition 

##  Increment Decrement Value

Create IncrementDecrement compnet 

Add teo button for increamnet and decrement 

using useState change counter value  on button on click event

## The Movie DB API using get Data & display using load more button

Create MovieDBAPI component 

Create useState  data & count 

Create useEffect for load api on click on buuton 

Create function getApiData for the call API and get json data in result

Using map() display data 

Add load more botton and change count state on click this button

Count is a page count and change page in api path 

Reload api using new page number 

Append data on post state




