import ExpensesList from './components/ExpensesList';
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
  ];

  return (
    <div className="App">
      <ExpensesList expenses={expenses}/>
    </div>
  );
}

export default App;
