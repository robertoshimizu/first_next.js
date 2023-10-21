# First React App

Going through this course: https://react-v8.holt.courses/lessons/no-frills-react/pure-react

starter: First commit


## Understand .jsx files

In a javascript way, you would import library react and write the follwoing javascript codes.
Here you write the Pet component.

```javascript
import React from "react";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

export default Pet
```
Here you import the above Pet component, and use it to compose a `App` script, which is them injected in the `index.html` at the element with the `id="root"` element.

```javascript
import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
```
Below you can see where the javascript code is injected in the `html` file:
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./style.css">
  <title>Adopt Me</title>
</head>

<body>
  <div id="root">not rendered</div>
  <script type="module" src="./App.js"></script>
</body>

</html>

```

The `.jsx` files as opposed to a traditional `.js`, uses syntatic sugar to simplify the code. For that, it uses the `React` library under the hood. Please notice below how the code changes as a consequence:

```javascript
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
```
Notice that you no longer has to declare the `import React from "react";` and use it to `create element`, you can write it as you would write a `html` file.

In addition, as you can see below, when you import the component `Pet` you can inject it using `<Pet />` along with the `props` fields. (like in Vue or Svelte)

```javascript
// rename the file App.jsx
// delete the React import
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

// delete the Pet component

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
```
The reference to module of the script is changed to `App.jsx`.
 `html` file:
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./style.css">
  <title>Adopt Me</title>
</head>

<body>
  <div id="root">not rendered</div>
  <script type="module" src="./App.jsx"></script>
</body>

</html>

```