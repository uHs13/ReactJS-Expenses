import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
    const expenses = props.expenses;

    return (
        <div className='expenses-list'>
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/>
        </div>
    );
}

export default ExpensesList;