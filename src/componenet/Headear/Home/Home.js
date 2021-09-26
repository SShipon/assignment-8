import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        fetch("./fackdata.JSON")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    
    return (
        <div>
            
        </div>
    );
};

export default Home;