import { Button } from "react-bootstrap";
import React, { useState } from "react";
import './css/style.css';

export default function ShowHideButton_9(){
    const [show,showBtn]=useState(false);
    return (
        <>
              <h4 className="main-heading">Welcome To Logistic Infotech</h4>
              <div className="center">
               <p> { show?'This is hide show data example':'' } </p>
                <span><Button onClick={e => showBtn(false)}>Hide</Button></span>&nbsp;
                <span><Button onClick={e => showBtn(true)}>Show</Button></span>
               </div>
        </>
    );
}