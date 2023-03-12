import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
// import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <div className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {/* // dynamically rendering the list */}
        {props.items.map((expense) => (
          <ExpenseItem
          title={expense.title}
           amount={expense.amount}
            date={expense.date
          } />
        ))}
        
      </div>
    </div>
  );
};

export default Expenses;