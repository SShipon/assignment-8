
import { useEffect, useState } from 'react';
import Allworkers from '../Workers/Allworkers.js';
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
            <div className="row">
                <div className="col-md-9 left-side">
                    <div className="row">
                        {
                            users.map(user => <Allworkers
                                key={user.key}
                                user={user}></Allworkers>)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                    <h1>this is hello</h1>
                </div>
                

            </div>
        </div>
    );
};

export default Home; 