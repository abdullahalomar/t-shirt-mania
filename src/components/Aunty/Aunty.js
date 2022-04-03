import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({ house }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h3>Aunty</h3>
            <p>house: {house}</p>
            <p><small>Ring: { ring}</small></p>
        </div>
    );
};

export default Aunty;