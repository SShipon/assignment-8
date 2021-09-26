import React from 'react';
import './Name.css'

const Name = (props) => {
    console.log(props);
    return (
        <div>
            {
                props.add.name
            }
        </div>
    );
};

export default Name;