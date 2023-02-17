import "./ExpensesList.css"
import React from "react";
import ExpensesItem from "./ExpensesItem";


function ExpensesList (props) {

    if(props.filteredExpenses.length === 0) {
    return <h2 className=" expenses-list__fallback">Found No Expenses</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.map(expense =>  <ExpensesItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
      </ul>
    )
}

export default ExpensesList;