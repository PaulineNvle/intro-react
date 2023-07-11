
import {useState} from 'react';
import {Title} from "./assets/Title";
import {InputAdd} from "./assets/InputAdd";

import "./App.css";


function App() {
  const [items, setItems] = useState ([]);

  function AddTodos(){
    
    let inputTodo = document.getElementById('InputAdd');

    setItems([...items, inputTodo.value]); 


  }
  
  return (
    <>

          <Title className="todoList" text="My todo list"></Title>
          <InputAdd
            type = "text"
            placeholder ="Add a task"
            buttonText = "ADD"
            onClick = {() => AddTodos()}>

            </InputAdd>
          
          <ul>
              {items.map((item, i) => {
                return(
                <li key={i}><input type="checkbox"/>{item}</li>
                )
              })}
          </ul>
      </> // comme une div parent, il faut qqch qui les englobe de plus grand

  );
};



export default App; //export de app pour pouvoir l'utiliser dans main.jsx