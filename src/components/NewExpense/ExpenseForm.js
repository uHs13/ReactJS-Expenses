import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
    const cleanInputs = {
        title: '',
        amount: '',
        date: ''
    };

    const [userInput, setUserInput] = useState(cleanInputs);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredValues = {
            ...userInput,
            date: new Date(userInput.date)
        };

        setUserInput(cleanInputs);

        props.onSaveExpense(enteredValues);
    };

    const titleChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, title: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, amount: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, date: event.target.value };
        });
    };

    const cancelHandler = () => {
        props.onCancel();
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" value={userInput.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" value={userInput.date} min="1900-01-01" step="2100-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense-actions">
                <button onClick={cancelHandler} className="cancel">Cancel</button>
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
