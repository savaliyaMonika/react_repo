import React, { useState } from "react";
import './css/style.css';
export default function DropdownMenu_9() {

    const [value, sermenu] = useState('');
    const [inputValue1, getinput1] = useState('');
    function calculation(inputValue, menu) {
        if (menu === 'Time') {
            return Math.floor(inputValue / 60);
        } else if (menu === 'Celsius') {
            return (inputValue * 9 / 5) + 32;
        }else {
            return 0
        }
    }
    return (

        <>
            <h4 className="main-heading">Welcome To Logistic Infotech</h4>
            <div className="row">
                <div className="col-md-4">
                    Select Menu
                </div>
                <div className="col-md-2">
                    {value === 'Time' ? "Second" : value === 'Celsius' ? 'Celsius' : ''}
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-4">
                    {value === 'Time' ? "Minut" : value === 'Celsius' ? 'Fahrenheit' : ''}
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <select className="form-control" value={value} onChange={e => sermenu(e.target.value)}>
                        <option value="">Select Menu</option>
                        <option value="Time">Time</option>
                        <option value="Celsius">Celsius</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <input name='input1' value={inputValue1} onChange={e => getinput1(e.target.value)} />
                </div>
                <div className="col-md-1">
                    <b>=</b>
                </div>
                <div className="col-md-4">
                    <p>{calculation(inputValue1, value)}</p>
                </div>

            </div>

        </>

    );

}