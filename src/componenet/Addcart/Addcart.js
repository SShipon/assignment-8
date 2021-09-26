import React from 'react';

const Addcart = (props) => {
    const { addTotal } = props
    console.log(addTotal);
    addTotal.map(total=>console.log(total))
    return (
        <div>
            <h1>add:{addTotal.length}</h1>
            
        </div>
    );
};

export default Addcart;