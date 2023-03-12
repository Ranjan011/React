import React from 'react'
import './ExpenseDate.css';

const ExpenseDate = ({date}) => {
console.log(date)

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{date.toString().slice(4,8)}</div>
            
            <div className='expense-date__year'>{date.toString().slice(8,11)}</div>
            <div className='expense-date__day'>{date.toString().slice(11,16)}</div>
        </div>
    )
}

export default ExpenseDate;
