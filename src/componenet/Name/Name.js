import React from 'react';
import './Name.css'

const Name = (props) => {
    
    return (
        <h3> Name:
            {
                props.add.name
            }
       </h3>
    );
};

export default Name;