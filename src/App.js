import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import ExerciseComponent from "./components/ExerciseComponent";

function App() {
  return (

      <div className='row mt-5'>
          <div className='col-lg-8 offset-2'>
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <button className="btn btn-success">Add New Item</button>
                  </div>
              </div>
          </div>

          <div className='col-lg-8 offset-2'>
              <ExpenseItem></ExpenseItem>
          </div>
      </div>




  );
}

export default App;
