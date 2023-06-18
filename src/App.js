import './App.css';
import ExpenseItem from "./components/expenses/ExpenseItem";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
import ExpenseFilter from "./components/expenses/ExpenseFilter";

function App() {
    const expenses = [
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

    const addExpenseHandler = (expense) => {
        console.log('App JS');
        console.log(expense);
    };

  return (

      <div className='row mt-5'>

          <div className='col-lg-8 offset-2'>
              <NewExpense onAddExpense={addExpenseHandler}/>
          </div>
          <div className='col-lg-8 offset-2 mt-2'>
              <Expenses expenses={expenses}></Expenses>
          </div>
      </div>




  );
}

export default App;
