import React from 'react';
import './Allworkers.css'

const Allworkers = (props) => {
    const {imges, name, age, country, salary } = props.user;
    console.log(props.user);
    return (
        <div className="col-md-4">
            <div className="user-cart">
            <div>
                <img  className="user-images" src={imges}alt="" srcset="" />
             </div>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
                <h6>country:{country}</h6>
                <h3>salary:<span>${salary}</span> </h3>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Allworkers;