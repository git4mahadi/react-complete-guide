import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" onChange={titleChangeHandler}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Amount</label>
                <input type="text" className="form-control" onChange={amountChangeHandler}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" onChange={dateChangeHandler}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
