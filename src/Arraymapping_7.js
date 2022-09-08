import React from "react";
import './css/style.css';

export default function Arraymapping_7() {
    const MOCK_DATA = [
        {
            id: 1,
            todoItem: "Buy Food"
        },
        {
            id: 2,
            todoItem: "Eat Dinner"
        },
        {
            id: 3,
            todoItem: "Clean the House"
        },
        {
            id: 4,
            todoItem: "Go for a Walk"
        }
    ];
    const toDoList = () => {
        return MOCK_DATA.map((item) =>
            <li key={item.id}>{item.todoItem} </li>
        )
    }
    return (
        <>
          <h4 className="main-heading">To DO List </h4>
            <div className="posts-container">
          
                <div className="post-container">
                   
                    <ul >{toDoList()} </ul>
                </div>
                
            </div>
        </>
    );
}