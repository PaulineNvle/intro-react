import React from "react";


export const InputAdd = (props) => {

    return (

        <div className="AddToDo">
            <input placeholder={props.placeholder} id={"InputAdd"}></input>
            <button onClick={props.onClick}>{props.buttonText}</button>
        </div>

    );



};

