import { useState } from 'react';
import ExpensesList from './components/Expenses/ExpensesList';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';
import CoverExpense from './components/NewExpense/CoverExpense';

const DUMMY_DATA = [
  {
    id: Math.random(),
    date: new Date(2022, 8, 24).toUTCString(),
    title: 'Investment',
    amount: 2500
  },
  {
    id: Math.random(),
    date: new Date(2022, 9, 15).toUTCString(),
    title: 'Investment',
    amount: 2850
  },
  {
    id: Math.random(),
    date: new Date(2023, 10, 1).toUTCString(),
    title: 'Nike',
    amount: 850
  },
  {
    id: Math.random(),
    date: new Date(2023, 6, 14).toUTCString(),
    title: 'City Group',
    amount: 3400
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const [formComponent, setFormComponent] = useState('cover');

  const saveExpenseHandler = (savedExpense) => {
    savedExpense.id = Math.random();

    setExpenses((previousExpensesList) => {
      return [...previousExpensesList, savedExpense];
    });
  };

  const changeCover = () => {
    setFormComponent((oldState) => {
      let newCover = (oldState === 'cover')
        ? 'new-expense-form'
        : 'cover'
      ;

      return newCover;
    });
  };

  const display = (formComponent === 'cover')
    ? <CoverExpense onNewExpenseClick={changeCover}/>
    : <NewExpense onSaveExpense={saveExpenseHandler} onCancel={changeCover}/>
  ;

  return (
    <div className="App">
      {display}
      <ExpensesList expenses={expenses}/>
    </div>
  );
}

export default App;
