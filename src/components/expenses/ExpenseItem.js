import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    const expenseDate = props.data.date;
    const expenseTitle = props.data.title;
    const expenseAmount = props.data.amount;

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <ExpenseDate date={expenseDate}/>
                    </div>
                    <div className="col-md-8">
                        {expenseTitle}
                    </div>
                    <div className="col-md-2">
                        <h2>${expenseAmount}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
