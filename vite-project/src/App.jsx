
import React from 'react';
import {Title} from "./assets/Title";
import {InputAdd} from "./assets/InputAdd";
import {Todos} from "./assets/Todos";


import "./App.css";


function App() {

  function AddTodos(){
    
  }
  
  return (
    <>

    <Title text="My todo list"></Title>
    <InputAdd placeholder="A faire" buttonText ="Créer" onclick="AddTodos"></InputAdd>
    <Todos></Todos>

    </>
  );

};



export default App; //export de app pour pouvoir l'utiliser dans main.jsx