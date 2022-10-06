import './ExpensesFilter.css';

function ExpensesFilter(props) {
    let dateRanges = [];
    let selectElements = [];

    const selectChangeHandler = (event) => {
        props.onSelectFilterChange(event.target.value);
    };

    const buildYearRange = () => {
        let currentYear = new Date().getFullYear();
        let initialYear = currentYear - 10;
        let finalYear = currentYear + 10;

        for (let i = initialYear; i <= finalYear; i++) {
            dateRanges.push(i);
        }

        return dateRanges;
    };

    const buildSelectElements = () => {
        const yearRange = buildYearRange();

        selectElements.push(<option value="all" key={Math.random()}>All</option>);

        yearRange.forEach(year => {
            selectElements.push(<option key={Math.random()} value={year}>{year}</option>)
        });

        return selectElements;
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter-control">
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={selectChangeHandler}>
                    {buildSelectElements()}
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;