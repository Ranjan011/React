import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
// import Card from './UI/Card';

function ExpenseItem(props) {
console.log(props)
  // const [title, setTitle] = useState(props.title);

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Click button</button> */}
    </div>
  );
}

export default ExpenseItem;
