import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import List from '../List/List';
import Card from '../UI/Card';

import './ExpensesList.css';

function ExpensesList(props) {
    const [selectedYear, setSelectedYear] = useState('all');
    const expenses = props.expenses;

    let expensesList = [];

    const selectFilterYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const addExpenseItemToExpensesList = (expense) => {
        expensesList.push(
            <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
            />
        );
    };

    const filterExpensesList = (expense) => {
        let expenseYear = new Date(expense.date).getFullYear();

        if (parseInt(selectedYear) === parseInt(expenseYear)) {
            addExpenseItemToExpensesList(expense);
        }
    };

    expenses.forEach((expense) => {
        (selectedYear === 'all')
            ? addExpenseItemToExpensesList(expense)
            : filterExpensesList(expense)
        ;
    });

    return (
        <Card className="expenses-list">
            <ExpensesFilter
                selectedYear={selectedYear}
                onSelectFilterChange={selectFilterYearHandler}
            />
            <List items={expensesList} />
        </Card>
    );
}

export default ExpensesList;