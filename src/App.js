import ExpensesList from './components/Expenses/ExpensesList';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';

function App() {
  const expenses = [
    {
      date: new Date(2022, 8, 24).toUTCString(),
      title: 'Investment',
      amount: 2500
    },
    {
      date: new Date(2022, 9, 15).toUTCString(),
      title: 'Investment',
      amount: 2850
    },
    {
      date: new Date(2023, 10, 1).toUTCString(),
      title: 'Nike',
      amount: 850
    },
    {
      date: new Date(2023, 6, 14).toUTCString(),
      title: 'City Group',
      amount: 3400
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <ExpensesList expenses={expenses}/>
    </div>
  );
}

export default App;
