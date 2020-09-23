import React from 'react';
import './User.css';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const User = (props) => {
    const {name,picture,balance,phone,email} =props.user;
    return (
        <div className='user'>
            <div className="img">
                <img src={picture} alt=""/>
            </div>
            <div className="about">
                <h2>Name: {name}</h2>
                <h3>Phone Number: {phone}</h3>
                <h3>Email: {email}</h3>
                <h3>Salary: ${balance}</h3>
                <button onClick={()=>props.handler(props.user)}><FontAwesomeIcon icon={faPlusSquare} /> ADD SELERY</button>
            </div>
        </div>
    );
};

export default User;