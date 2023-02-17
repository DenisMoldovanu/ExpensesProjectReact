import "./ExpensesItem.css"
import React, {useState} from "react";
import ExpensesDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpensesItem (props) {


    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log("clicked");
        setTitle("denis test")
    }

    return (

        <Card className="expense-item">
            <ExpensesDate date = {props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpensesItem;