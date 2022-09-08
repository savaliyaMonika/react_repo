import React, { useState } from "react";
import './css/style.css';
export default function BasicUseState_9() {
    const [message, setMassage] = useState('');
    /* function getMssage(e) {
        return setMassage(e.target.value);
    }  */
    return (
        <>
            <h4 className="main-heading">Welcome To Logistic Infotech</h4>
            <div className="center">
            <input name='input1' id='input1' placeholder="Enter a message" value={message} onChange={e => setMassage(e.target.value)} />
            <p>
                <strong>{message}</strong>
            </p>
            </div>
        </>
    );
}