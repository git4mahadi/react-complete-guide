import React, {useState} from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <ExpenseDate date={props.data.date}/>
                    </div>
                    <div className="col-md-6">
                        {props.data.title}
                    </div>
                    <div className="col-md-2">
                        <h2>${props.data.amount}</h2>
                    </div>
                    <div className="col-md-2">
                        <div className="btn btn-success">Click</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
