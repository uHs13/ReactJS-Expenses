import './CoverExpense.css';

function CoverExpense(props) {
    const clickHandler = () => {
        props.onNewExpenseClick();
    };

    return (
        <div className="container">
            <button onClick={clickHandler}>New Expense</button>
        </div>
    );
}

export default CoverExpense;