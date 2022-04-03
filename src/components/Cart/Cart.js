import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    // conditional rendaring options
    // 1. Element variable
    // 2. ternary operator = condition ? true : false
    // 3. && operator (shorthand)
    // 4. ||
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Please Add Some Items!!</h5>
        </div>
    }
    else if (cart.length === 1) {
        command = <div>
            <h5>Please add more...</h5>
        </div>
    }
    else {
        command = <div>
        <h5>Thanks for adding item</h5>
    </div>
    }

    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>
            {command}
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={()=> handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {/* ternary operator */}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
            
            {/* && operator (shorthand) */}
            {cart.length === 3 && <p>Trigonal</p>}
            {cart.length ===4 && <button>Review all</button>}
            
            {/* || or   */}
            {cart.length === 0 || <p>yay! you are buy!</p>}
            
        </div>
    );
};

export default Cart;