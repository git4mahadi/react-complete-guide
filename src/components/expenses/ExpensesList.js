import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    const expenseItems = props.items;
    let expenseContent;

    if(expenseItems.length === 0) {
        return (<p className="text-danger">No expense found.</p>);
    }

    if(expenseItems.length> 0) {
        expenseContent = expenseItems.map(item => (
            <ExpenseItem key={item.id} data={item}/>
        ))
        return expenseContent;
    }
}

export  default ExpensesList;
