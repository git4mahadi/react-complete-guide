
import React from "react";

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <ExpenseForm/>
            </div>
        </div>
    );
}

export  default NewExpense;
