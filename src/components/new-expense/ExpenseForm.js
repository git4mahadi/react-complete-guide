import React from "react";

import './ExpenseForm.css'

const ExpenseForm = () => {

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        console.log('Title change handler executed');
    }
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" onChange={titleChangeHandler}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Amount</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
