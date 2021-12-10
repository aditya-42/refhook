import React,{useRef} from 'react';

function App() {

  const InputEl = useRef(null);

  const clearInputHandler = () =>{
    
    InputEl.current.value = "";
    InputEl.current.focus();

  };

  return (
    <>
    <input placeholder="Type Anything" ref={InputEl}></input>
    <hr/>
    <button onClick ={clearInputHandler}>Clear!!</button>
    </>
  );
}

export default App;
