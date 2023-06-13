import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

    return (
        <div className='card'>
            <div className="card-body">
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
