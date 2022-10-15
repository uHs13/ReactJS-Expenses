import ChartBar from './ChartBar';

import './Chart.css';

function Chart(props) {
    const findMaximumValue = (monthsData) => {
        let monthValues = monthsData.map(month => month.value);

        return monthValues.reduce((partialSum, value) => partialSum + value, 0);
    };

    const monthsData = () => {
        let chartBars = [];

        const maximumValue = findMaximumValue(props.monthsData);

        props.monthsData.forEach(month => {
            chartBars.push(<ChartBar
                key={Math.random()}
                value={month.value}
                maxValue={maximumValue}
                label={month.label}
            />);
        });

        return chartBars;
    };

    return (
        <div className="chart">
            {monthsData()}
        </div>
    );
}

export default Chart;
