import React from 'react'
import '../styles/App.css';
const TypesOfFruit = () => {
  return (
    <div id="typesOfFruits">
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div id="fruits">
      { /* Change code below this line */ }
      <Typesoffruit />

      { /* Change code above this line */ }
    </div>
  );
};
const App = () => {

  return (
    <div id="main">
      <h1>Types of Food:</h1>
      { /* Change code below this line */ }
       <fruits />
      { /* Change code above this line */ }
    </div>
  )
}


export default App;
