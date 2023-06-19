import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isShowingForm, setIsShowingForm] = useState(false);

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

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const onClickAddNewExpense = () => {
        setIsShowingForm(true);
    }

    const onCancel = () => {
        setIsShowingForm(false);
    }

    return (

        <div className='col-lg-8 offset-2'>
            <div className='card'>
                <div className='card-body'>

                    {!isShowingForm && (<button className='btn btn-primary btn-lg'
                                                onClick={onClickAddNewExpense}>Add New Expense
                    </button>)}

                    {isShowingForm && (
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control"
                                       value={enteredTitle}
                                       onChange={titleChangeHandler}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Amount</label>
                                <input type="text" className="form-control"
                                       value={enteredAmount}
                                       onChange={amountChangeHandler}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date</label>
                                <input type="date" className="form-control"
                                       value={enteredDate} onChange={dateChangeHandler}/>
                            </div>
                            <div className="col-12 text-lg-end">
                                <button type="button" className="btn btn-info" onClick={onCancel}>Cancel</button>
                                <button type="submit" className="btn btn-primary mx-2">Add Expense</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>

    );
}

export default ExpenseForm;
