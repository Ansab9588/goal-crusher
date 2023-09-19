import React from "react";
import './App.css';

const ToDo = (props) => {
    return (
        <>
        <ul>
        <li className="list-item"> 
        {props.item} 
        <span>
        <i className="fa-solid fa-trash-can icon-delete"
        onClick={()=>{
            props.deleteItems(props.index);
        }}
        ></i>
        </span>
        </li>
        </ul>
        </>
    );
};

export default ToDo;
