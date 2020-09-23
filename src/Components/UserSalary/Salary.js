import React from 'react';

const Salary = (props) => {
    const total = props.allSalaries.reduce((sum,salary)=>sum+salary.balance,0).toFixed(2);
    
    return (
        <div>
            <h2>Total added {props.allSalaries.length} User</h2>
            <h3>Total salary ${total}</h3>
        </div>
    );
};

export default Salary;