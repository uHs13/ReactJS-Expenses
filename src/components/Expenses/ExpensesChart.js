import Chart from "../Chart/Chart";

function ExpensesChart(props) {
    let monthsData = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    const buildMonthsData = () => {
        props.expensesList.forEach(expense => {
            const expenseProps = expense.props;
            let expenseMonth = new Date(expenseProps.date).getMonth();

            monthsData[expenseMonth].value += expenseProps.amount;
        });

        console.log(monthsData);

        return monthsData;
    };

    return (<Chart monthsData={buildMonthsData()}/>);
}

export default ExpensesChart;