import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 9],
  ["Eat", 2],
  ["Commute", 3],
  ["Learning", 4],
  ["Sleep", 6],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
    />
  );
}

export default App;
