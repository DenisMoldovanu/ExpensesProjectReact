
import "./Expenses.css"
import React, {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";



function Expenses (props) {

  const [filteredYear, setFilteredYear] = useState('2023')

  const getExpensesFilter = (getYear) => {
    setFilteredYear(getYear)
    // console.log(getYear)
  }

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  })
  console.log(filteredExpenses)

    return (
      <div>
          <div className="expenses">
            <ExpenseFilter getExpensesFilter = {getExpensesFilter} selected = {filteredYear}/>
            <ExpensesList filteredExpenses = {filteredExpenses}/>
            {/* Variant 2 */}
            {/* {filteredExpenses.length === 0 ? (
            <p>No expenses found</p>
            ) : (
              filteredExpenses.map(expense =>  <ExpensesItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
              )} */}
          </div>
      </div>
    )
}

export default Expenses;