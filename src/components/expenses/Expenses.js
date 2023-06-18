import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const filterChangeHandler= (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    return (
        <div className='card'>
            <div className="card-body">

                <div className='row'>
                    <ExpenseFilter selected={selectedYear} onChangerFilter={filterChangeHandler}/>
                </div>
                <div className='row'>
                    {props.expenses.map((item) => (
                        <ExpenseItem data={item}/>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Expenses;
