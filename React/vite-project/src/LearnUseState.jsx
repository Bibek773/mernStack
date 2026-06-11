import React, { useState } from 'react'

const LearnUseState = () => {

    let [name, setName] = useState ("Bibek")
    let [count, setCount] = useState (1)
  return (
    <div>
       <p>Name is {name}</p>
       <button onClick={() =>
        setName ("Acharya Kto")
       }>Click me</button>
<br>
</br>
<p>the number is {count}</p>
       <button onClick={() =>
        setCount (count +1)
       }>+</button>
       <button onClick={() =>
        setCount (count -1)
       }>-</button>
    </div>
  );
};

export default LearnUseState
