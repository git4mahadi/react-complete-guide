
import React from "react";

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
        </div>
    );
}

export  default NewExpense;
