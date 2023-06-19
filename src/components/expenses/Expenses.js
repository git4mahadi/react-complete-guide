import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const filterChangeHandler= (selectedYear) => {
        setSelectedYear(selectedYear);
        // props.onChangeYearDropdown(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(itm=> {
        return itm.date.getFullYear().toString() === selectedYear
    });


    return (
        <div className='card'>
            <div className="card-body">
                <div className='row'>
                    <ExpenseFilter selected={selectedYear} onChangerFilter={filterChangeHandler}/>
                </div>
                <div className='row'>
                    <ExpensesList items={filteredExpenses}/>
                </div>
            </div>
        </div>

    )
}

export default Expenses;
