import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './ExpensesList.css';

function ExpensesList(props) {
    const [selectedYear, setSelectedYear] = useState('');
    const expenses = props.expenses;
    let expensesList = [];

    expenses.forEach(expense => {
        expensesList.push(<ExpenseItem date={expense.date} title={expense.title} amount={expense.amount}/>);
    });

    const selectFilterYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    return (
        <Card className="expenses-list">
            <ExpensesFilter onSelectFilterChange={selectFilterYearHandler}/>
            {expensesList}
        </Card>
    );
}

export default ExpensesList;