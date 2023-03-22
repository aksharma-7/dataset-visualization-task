import "./App.css";
import BarChart from "./Charts/BarChart";
import ScatterPlot from "./Charts/ScatterPlot";
import wineData from "./Wine-Data.json";

function App() {
  return (
    <div className="chart-container">
      <ScatterPlot wineData={wineData} />
      <BarChart wineData={wineData} />
    </div>
  );
}

export default App;
