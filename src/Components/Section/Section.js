import React, { useState } from 'react';
import data from '../Data/data.json';
import User from '../User/User';
import Salary from '../UserSalary/Salary';
import './Section.css';
const Section = () => {
    let lodedData = data.slice(2,12);
    const [salaries, setSalaries] = useState([]);
    function handler(clickedSalary){
        const newSalaries = [...salaries,clickedSalary];
        setSalaries(newSalaries);

    }
    return (
        <div className="section">
            <div className="user-details">
                {
                    lodedData.map(user => <User user={user} handler={handler}></User>)
                }
            </div>
            <div className="user-salary">
                <Salary allSalaries={salaries}></Salary>
            </div>
        </div>
    );
};

export default Section;