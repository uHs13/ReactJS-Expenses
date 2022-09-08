import './ExpenseDate.css';

function ExpenseDate(props) {
    const date = new Date(props.date);
    const year = date.toLocaleString('en-US', {month: 'long'});
    const month = date.getFullYear();
    const day = date.toLocaleString('en-US', {day: '2-digit'});

    return (
        <div className='expense-date'>
            <div className='expense-date-year'>{year}</div>
            <div className='expense-date-month'>{month}</div>
            <div className='expense-date-day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;