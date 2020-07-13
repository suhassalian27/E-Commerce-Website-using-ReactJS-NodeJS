import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { savePayment } from "../actions/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen(props) {
    const [paymentMethod, setPaymentMethod] = useState("");

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(savePayment(paymentMethod));
        props.history.push("placeorder");
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Payment</h2>
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod"
                                onChange={e => setPaymentMethod(e.target.value)}
                                value="paypal"
                            ></input>
                            <label htmlFor="paymentMethod">Paypal</label>
                        </li>
                        <li>
                            <button type="submit" className="button primary">
                                Continue
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}
export default PaymentScreen;
