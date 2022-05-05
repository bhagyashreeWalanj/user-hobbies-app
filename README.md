# Arive Code Challenge

> This is an implemenation of the code challenge given by Arive as part of interview process. .

Arive Frontend Challenge - React with TypeScript

> Write a front-end API for a small app "User Hobbies" with the following requirements: (Time: 1-2 hrs)

> Key Feature:

1. There would be 2 columns both resizable and scrollable.
2. In User columns, user will be listed and added.
3. Right column is blank grey screen untilauser is selected.
4. Data should be loaded initially from the mock at http service layer. (Keeping other flow untouched as ifaproduction app)
5. Onceauser is selected: In Right column, user can now view, add or delete(with confirmation dialog) the hobbies.
6. Hobby consists of three things mentioned below. Passion can be selected out of "Low", "Medium", "High" and "Very-High". (Preferably
   some validation).

> Tech details:

1. ReactJS with Typescript (Hint: Make your own nice directory structure of data/http services)
2. Use Redux store. (Choose actions nicely)
3. Mock data on Http level only.
4. Create test infrastructure in Jest&enzymes and write test for at-least one functionality to demonstrate.
5. Don't use any Css library like bootstrap.
6. Create your own nice little SASS architect
7. Add some color variables and write your sass for the layout (Hint: Flexbox and modular sass)

This project was bootstrapped with ReactJS version of the [Create React App](https://github.com/facebook/create-react-app).

## Installation

First, install the packages.

```
npm install
```

Then run following command to start the project.

```
npm start
```

To execute test cases run following command.

```
npm run test -- -u
```

## Mock API endpoint:

https://624b52c271e21eebbcf0b4ba.mockapi.io/users
(Refer \_mock.js file for mock data structure)

## Third Party Libraries

- [typescript](https://react-bootstrap.github.io/getting-started/introduction) for react.
- [react-redux](https://redux.js.org/introduction/installation)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [@types/redux-thunk](https://redux.js.org/introduction/installation) for redux
- [axios](https://axios-http.com/docs/intro) to handle Promise based HTTP client for the browser and node.js
- [React Icons](https://react-icons.github.io/react-icons) for icons
- [classnames](https://jedwatson.github.io/classnames/) for for conditionally joining classNames together.
- [sass](https://sass-lang.com/install) for CSS extension
- [@types/jest](https://jestjs.io/docs/getting-started) for the test runner
- [enzyme](https://www.codementor.io/@rajjeet/get-started-with-react-testing-jest-enzyme-4-easy-steps-1dn5180mzr) for enzyme testing

- [enzyme-adapter-react-16](https://enzymejs.github.io/enzyme/docs/installation/react-16.html) is an adapter between React and Enzyme. This will be executed before running the tests.
