import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
    const cleanInputs = {
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    };

    const [userInput, setUserInput] = useState(cleanInputs);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredValues = {
            ...userInput,
            enteredDate: new Date(userInput.enteredDate)
        };

        setUserInput(cleanInputs);

        props.onSaveExpense(enteredValues);
    };

    const titleChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, enteredTitle: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, enteredAmount: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, enteredDate: event.target.value };
        });
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} min="1900-01-01" step="2100-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense-actions">
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
