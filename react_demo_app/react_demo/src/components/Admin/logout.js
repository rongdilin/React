import React from 'react';
import axios from 'axios';

const Logout = (props) =>{

    let req = axios.get(`/api/logout`)
    .then(req => {
        setTimeout(() =>{
            props.history.push('/');
        },2000);
    })

    return (
        <div className="logout_container">
            <h1>
                Sorry, log out right now
            </h1>
        </div>
    );
}
export default Logout;
