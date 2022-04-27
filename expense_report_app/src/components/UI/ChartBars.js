import "./ChartBars.css";

const ChartBars = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.data / props.maxValue) * 100) + "%";
  }

  /*<div
          className="chart-bar__fill"
          style={{
            writingMode: "vertical-lr",
            verticalAlign: "middle",
            color: "whitesmoke",
          }}
        >
          ${Number(props.data).toFixed(2)}
        </div>*/

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: barFillHeight,
            position: "relative",
            writingMode: "vertical-lr",
            verticalAlign: "middle",
            color: "white",
          }}
        >
          ${Number(props.data).toFixed(2)}
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
      <div className="chart-bar__label">${Number(props.data).toFixed(2)}</div>
    </div>
  );
};

export default ChartBars;
