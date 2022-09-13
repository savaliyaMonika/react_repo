import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './css/style.css';
export default function CloneIncrementDecrement() {
    const [clone, setClone] = useState([]);
    const [count, setcount] = useState(0);
    const [index,setIndex]=useState(0);
    function getClone() {
                 setClone([...clone,key=>setIndex(index+1),<div>{count}<Button onClick={e=>setcount(count+1)}>+</Button> <Button onClick={e=>setcount(count-1)}>-</Button></div>])
    }
    return (
        <>
            <h4 className="main-heading">Welcome To Logistic Infotech</h4>
            <div className="center">
                <Button onClick={getClone}>New Clone</Button>
                {clone}
            </div>
        </>
    );
}