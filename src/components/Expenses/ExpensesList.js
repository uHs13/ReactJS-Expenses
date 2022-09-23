import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpensesList.css';

function ExpensesList(props) {
    const expenses = props.expenses;

    let expensesList = [];

    expenses.forEach(expense => {
        expensesList.push(<ExpenseItem date={expense.date} title={expense.title} amount={expense.amount}/>);
    });

    return (
        <Card className="expenses-list">
            {expensesList}
        </Card>
    );
}

export default ExpensesList;