import React from "react";


export const InputAdd = (props) => {
    
    return (

        <div className="AddToDo"> 
            <input placeholder={props.placeholder} id={"InputAdd"}></input>
            <button onClick={props.onClick}>{props.buttonText}</button>
        </div>

    );



};


// import et export sont lié
// props: va chercher l'info, grace au export, on recupère l'info sur un autre fichier
// 