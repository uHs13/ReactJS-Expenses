import './ChartBar.css';

function ChartBar(props) {
    let barFillHeight = (props.maxValue > 0)
        ? Math.round((props.value / props.maxValue) * 100) + '%'
        : '0%'
    ;

    return (
        <div className="chart-bar">
            <div className="chart-bar-inner">
                <div className="chart-bar-fill" style={{height: barFillHeight}}>

                </div>
            </div>
            <div className="chart-bar-label">{props.label}</div>
        </div>
    );
}

export default ChartBar;
