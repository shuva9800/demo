import React, { useState } from "react";
import "./App.css";

function App() {
  let [newValue, setValue] = useState(0);
  // console.log(newValue)
  function decrement() {
    let currentvalue = newValue - 1;
    console.log(currentvalue);
    setValue(currentvalue);
  }

  function increment() {
    let recentvalue = newValue + 1;
    console.log(recentvalue);
    setValue(recentvalue);
  }

  function reset() {
    setValue(0);
  }
  return (
    // <main class="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
    // </main>

    <div>
      <h2> Increment && Decrement</h2>
      <div>
        <button onClick={decrement}>-</button>
        <div>{newValue}</div>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>reset</button>

      <h3>Good to see you </h3>'
    </div>
  
  );
}

export default App;
