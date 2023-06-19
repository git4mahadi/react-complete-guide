import './App.css';

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];


const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const [isShowingForm, setIsShowingForm] = useState(false);

    const addExpenseHandler = (expense) => {
       setExpenses((preExpenses) => {
           return [expense, ...preExpenses]
       });
    };

    const onClickAddNewExpense= () => {
        setIsShowingForm(true);
    }


  return (
      <div className='row mt-5'>

          <div className='col-lg-8 offset-2'>
              {!isShowingForm && (<div className='card'>
                  <div className='card-body'>
                      <button className='btn btn-primary btn-lg'
                              onClick={onClickAddNewExpense}>Add New Expense</button>
                  </div>
              </div>) }

              {isShowingForm && (<NewExpense onAddExpense={addExpenseHandler}/>)}

          </div>
          <div className='col-lg-8 offset-2 mt-2'>
              <Expenses expenses={expenses} />
          </div>
      </div>




  );
}

export default App;
