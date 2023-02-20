import "./ExpenseForm.css"
import React, {useState} from "react";



function ExpenseForm  (props)  {

const [enteredTitle, setEnteredTitle] = useState("")
const [enteredAmount, setEnteredAmount] = useState("")
const [enteredDate, setEnteredDate] = useState("")

// const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
// })

    const titleChangeHandler = (event) => {
        //VARIANT 1
        setEnteredTitle(event.target.value)
        
          //VARIANT 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })

          //VARIANT 3
        //   setUserInput((prevState) => {
        //     return {...prevState, enteredTitle:event.target.value };
        //   })
        // console.log(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
        // console.log(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
        // console.log(event.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        //up to parent function
        props.onSaveExpenseData(expenseData)
        // console.log(expenseData)
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }
    

    return (

    <form onSubmit={submitHandler} className="new-expense">
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input type="date" min="2019-01-01" max="2023-02-16" value={enteredDate} onChange={dateChangeHandler} />
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditingHandler}>Cancel</button>
        <button type="submit">Add Expenses</button>
    </div>
    </form>
    )
}

export default ExpenseForm;