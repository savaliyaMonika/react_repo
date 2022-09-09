import React, { useState } from "react";
import './css/style.css';
export default function PriceQuantity_9() {
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    function getAmount(e) {
        setQty(e.target.value)
    }
    return (
        <>
            <h4 className="main-heading">Welcome To Logistic Infotech</h4>
            <div className="center">
                <b>  Price  </b>
                <input name='price' type='number' value={price} onChange={e => setPrice(e.target.value)} />

                <b> X Qty </b>
                <input name='qty' type='number' value={qty} onChange={getAmount} />
                {price * qty}
            </div>
        </>
    );
}