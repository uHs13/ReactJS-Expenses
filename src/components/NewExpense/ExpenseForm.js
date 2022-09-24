import './ExpenseForm.css';

function ExpenseForm() {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <form>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" min="1900-01-01" step="2100-12-31" />
                </div>
            </div>
            <div className="new-expense-actions">
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;