import './ExpenseItem.css'

function ExpenseItem() {
    return (

        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        March 28
                    </div>
                    <div className="col-md-8">
                        Car Insurance
                    </div>
                    <div className="col-md-2">
                        <h2>$2444</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
