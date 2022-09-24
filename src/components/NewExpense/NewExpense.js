import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense(props) {
    const onSaveExpenseHandler = (savedExpense) => {
        const expense = {
            ...savedExpense,
            id: Math.random().toString()
        }

        props.onSaveExpense(expense);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
        </div>
    );
}

export default NewExpense;