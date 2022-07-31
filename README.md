# React Tutorial

* React is a javascript library.
* React use virtual dom thats why the page created with react is fast.
* React can be use for mobile app development.
* Babel will convert react to normal javascript.
* react-dom connect html with react

* Download nodejs from 
    > https://nodejs.org/en/

* check node and npm version. Go to command prompt and type:
    > node -v
    >
    > npm -v

* To install visual code studio:
    > https://code.visualstudio.com/

* To create a react appliation we can use command:
    > npx create-react-app application-name

* To start the react application run following command:
    > npm start

* Package.json will keep the detail of application but the package-lock.json keep the details of libraries of dependencies.

* App.test.js is used for unit testing.
* reportWebVitals will check performance of project.
* setupTests.js to setup unit test case.
* manifest.json is metadata file.
* node modules are library required by application.
* To get a node module on project if not exists, run :
    > npm install

* To run the command:
    > npm run command-name
    >
    >npm run build

### Components in Reactjs
* Component is a element of large whole. A piece of code that can be reuse. Header, Footer etc are the example of component.
* Type of component:
    1. Functional Component
    2. Class Component

* Default export:
    ```
    function User() {
        return (
        <div className="App">
            <h1> Hello User !</h1>
        </div>
        );
    }
    
    export default User;
    ```
* Normal export:
    ```
    export function User() {
        return (
        <div className="App">
            <h1> Hello User !</h1>
        </div>
        );
    }
    
    ```


* For export default we can import by:
    > import User from './User'; 
    
* For normal export we can import by:
    > import {User} from './User';


* We can define component inside component.
* We have to import React and extends React.Component to use the class component.

### JSX in Reactjs
* JSX stands for javascript xml.
* It allow to write HTML and javascript together.
    ```
    function User() {
        return (
        <div className="App">
            <h1> Hello User !</h1>
        </div>
        );
    }
    ```

* State is kind of data container such as variable.
* {useState} is a hook used to get feature of state in react.
* State is always public.

* props are use to transfer data from one component to another component.

* We cannot use {useState} hook in Class Component. We can only use on funtional component.
* We can pass html from props using `this.props.children`.
* useEffect is basically a hook that can handle lifecycle method in functional component. Actually lifecycle method can only be used in class component but use of useEffect hooks make it possible.
* useEffect hook work as a componentDidMount,componentDidUpdate, componentWillUpdate.
* We can use multiple useEffect in single component.
* We cannot use useEffect in class component.
* No we cannot use useEffect inside child component.

* Css with modular way

### Install bootstrap in react
* Run following command in terminal in application
    > npm install react-bootstrap bootstrap
* For react bootstrap
    > https://react-bootstrap.github.io/

* We cannot use for loop in react because return doesnot support forloop with jsx.

* React fragment is a pattern which is used for wrap multiple element in component.
* Lifting state up means sending data from child component to parent component.
* Pure component stops unwanted rerendering if there is no changes in file otherwise update only the updated component.
* Memo hook is used to control unwanted called function.
* Ref can modify dom directly.
* In class we use creatRef hook but in functional component we use useref.
* useRef is basically use for control, update the dom of application.
* We can do get and set data using state and props instead of useRef but we cannot do focus using state and props, with ref we can do it.
* Ref We can use only on same component. We cannot interact different component using ref. We will use forwardRef to interact different component.

* HOC is a component that take another component as input and produce output as a component.

### Install react router
* To install react router, run following command in cmd prompt from application location:
    > npm install react-router-dom


### Redux
* Redux is a container where you can store your whole application data. We can call it state management. It doesn't belong to component state.
* We can only use one store in one application.

* Install redux in react project:
    > npm install redux

* Install react redux:
    > npm install react-redux




