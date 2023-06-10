import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

    return (
        <div className='row'>
            {props.expenses.map((item) => (
                <ExpenseItem data={item}/>
            ))}
        </div>
    )
}

export default Expenses;
