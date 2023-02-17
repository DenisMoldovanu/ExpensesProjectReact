import "./NewExpense.css"
import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";



function NewExpense (props) {

    const [isEditing, setEditing] = useState(false)

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // console.log(expenseData)
        props.expenseHandler(expenseData)
        setEditing(false)
    }

    const startEditingHandler = () => {
        setEditing(true);
    }

    const stopEditingHandler = () => {
        setEditing(false);
    }

    return (

    <div className="new-expense">
       {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button> } 
    {isEditing && <ExpenseForm stopEditingHandler={stopEditingHandler} onSaveExpenseData = {SaveExpenseDataHandler} />}
    </div>
    )
}

export default NewExpense;