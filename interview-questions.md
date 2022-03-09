# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer:
"This" is a javascript keyword that refers an object. It can be used with .notation method to access a value that's within in object. The method, or the function within an object can refer to its values using the key and "this", like "this.(name of key)"

  Researched answer:
The keyword "this" is a reference to an object but which object depends on how this is invoked. For example "this" by itself or in a function refers to the global object, while this with methods refer this to any object.


2. What is React? Why would you use it?

  Your answer:
  React is an open source javascript library used to build user interfaces. It is widely used in the industry and maintained by Meta (originally Facebook). React is very modular and based on components which are separate reusable pieces of code. It saves a lot of time for building the front-end is very good for making web applications with dynamic data.

  Researched answer:
  React is a javascript based user interface development library and is widely used among web developers. It allows easy creation of dynamic applications with pre-built code (less coding). React's Virtual DOM (or document object model) is a highly performing and efficient way to render data by comparing its components previous states and updates items that the DOM that were changed, leaving the other components untouched.


3. Which lifecycle method is required in a React class component?

  Your answer:
  The constructor method is required when creating data that belongs to a class. It runs automatically when a class is instantiated. For example when you're setting up a component and instantiating the class, you would type "constructor(){} within the class's code block.

  Researched answer:
During the "Mounting" component lifecycle, the constructor method is required and called before anything else in the component. It's called with "props", as arguments and should always call super(props) before anything else which will initiate the parent class's constructor method and allows the component to inherit methods from the parent class.



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer:
  JSX is like the javascript version of html. It's a markup language that pre processes HTML (actually XML) into plain javascript before the file is sent to the browser. The render method in react uses JSX and it's encapsulated by "fragments" which are empty tags that look like this <></>. One big difference between HTML and JSX is that the JSX in React only returns one element. For example if you put a header and a paragraph tag by itself in the JSX, it will only render the first thing, the header. In order to render all of that, you will need to encapsulate all of those elements into a div.

  Researched answer:
  JSX is a markup that allows the developer to write HTML into javascript and allow easy placement in the DOM. It is not required but highly recommended to use JSX as it's a helpful visual aid when modifying the UI inside javascript code. One big difference is that you would need to encapsulate all HTML elements within a div if you want all elements to be rendered properly in the JSX



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:
  YARN stands for Yet Another React Negotiator. It's a package manager that creates the file structure for a React app. You can setup a new React app via the terminal with yarn commands. When you run yarn, it will install the base file structure and dependencies needed for your React app. When modifying the code of the React application, we make a components folder under src where we create and code new components and import them within the App.js of the app's root folder.

  Researched answer:
Yarn is a packaging system developed for node.js. Yarn is used to create new React applications and will build the file structure for any new app via terminal. Using yarn to run the React application is similar to running a server, and the application can be stopped by hitting ctrl + c in the terminal. yarn create react-app "name-of-app" creates the director and installs the files and dependencies needed for the app. The developer then makes a components folder under src and also modifies App.js when developing the React app.


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: an anonymous function is a function with a name, which is defined by function () {} After it's creation it is not accessible, so it's usually assigned to a variable, as a function as a value.

  Researched answer:
  An anonymous function is a function declared without a name. Normally the function's name is declared after "function" or before function syntax. Thus, it can't be accessed unless it's assigned in a variable as a value. Anonymous functions are usually used as arguments passed to higher order functions.

## Looking Ahead: Terms for Next Week

1. Conditional rendering:
A powerful tool that in React that lets you create components with encapsulated behavior and then you can render only some of the behavior depending on the state of the application. It's similar to conditions in javascript.

2. Props:
"Props" is a keyword, which stands for properties and is used for passing data from one component to another. But the data flow is uni-directional, only from parent to child. The prop data is read-only and can't be changed by child components


3. JavaScript Events:
Javscript events are actions or occurrences that happen in the application either done by the user or the browser/app. Some events can be the user clicking on a button, moving the mouse over an element, pressing certain keys, etc. We can use javascript to handle what happens when certain events take place.

4. Object-oriented programming:
Object-oriented programming is a philosophy of programming based around objects.Objects contain variables as properties and functions as behavior. The benefit of objects is providing a clear structure for the program. It's a very popular programming model because it makes visualization easier and closer to real world scenarios

5. Ruby:
A dynamic, interpreted open source language and supports multiple programming paradigms. It was designed with productivity and simplicity in mind, using simple language and syntax to handle data and logic.
