import React, {useState} from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    const [expenseTitle, setExpenseTitle] = useState(props.data.title);

    const expenseDate = props.data.date;
    const expenseAmount = props.data.amount;

    const clickHandler = () => {
        setExpenseTitle('Updated Title !!!');
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <ExpenseDate date={expenseDate}/>
                    </div>
                    <div className="col-md-6">
                        {expenseTitle}
                    </div>
                    <div className="col-md-2">
                        <h2>${expenseAmount}</h2>
                    </div>
                    <div className="col-md-2">
                        <div onClick={clickHandler} className="btn btn-success">Click</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
