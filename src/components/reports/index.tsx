import { Chart } from "primereact/chart";

export default function Reports(props: { data: Array<any> }) {
  const chartYearsResult = props.data.reduce((chartDataObj, currentExpense) => {
    const { date, amount } = currentExpense;
    const year = new Date(date).getFullYear();
    if (!chartDataObj[year]) {
      chartDataObj[year] = Number(amount);
    } else {
      chartDataObj[year] = chartDataObj[year] + Number(amount);
    }
    return chartDataObj;
  }, {});

  const labels = Object.keys(chartYearsResult);
  const data = Object.values(chartYearsResult) as Array<number>;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PieChartDemo labels={labels} data={data} />
    </div>
  );
}

const PieChartDemo = (props: {
  labels: Array<string>;
  data: Array<number>;
}) => {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: [
          "red",
          "blue",
          "green",
          "lightgray",
          "yellow",
          "coral",
        ],
      },
    ],
  };

  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  };

  return (
    <div className="card flex justify-content-center" style={{ width: "40%" }}>
      <Chart type="pie" data={chartData} options={lightOptions} />
    </div>
  );
};
