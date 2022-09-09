import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './css/style.css';
export default function IncrementDecrement() {
    const [count, setCount] = useState(0);
    function getCount() {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("Value is 0");
        }
    }
    return (
        <>
            <h4 className="main-heading">Welcome To Logistic Infotech</h4>
            <div className="center">
                {count}
                <Button name='increment' onClick={e => setCount(count + 1)} >+</Button>&nbsp;
                <Button name='dicrement' onClick={getCount} >-</Button>&nbsp;
            </div>
        </>
    );
}