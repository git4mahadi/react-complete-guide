
import React from "react";

const ExpenseFilter = (props) => {

    const dropDownChangeHandler = (event) => {
        props.onChangerFilter(event.target.value)
    }

    return (
        <div className="mb-3">
            <label className="form-label">Filter By Year</label>
            <select value={props.selected} onChange={dropDownChangeHandler} className="form-select">
                <option value=''>Choose...</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;
