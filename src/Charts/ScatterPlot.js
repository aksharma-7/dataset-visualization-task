import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getOptions } from "../utils/chartUtils";

const ScatterPlot = ({ wineData }) => {
  const [colorIntensity, setColorIntensity] = useState([]);
  const [hue, setHueArr] = useState([]);

  useEffect(() => {
    const intensity = [];
    const hueArr = [];
    wineData.map((data) => {
      intensity.push(data["Color intensity"]);
      hueArr.push(data["Hue"]);
    });
    setHueArr(hueArr);
    setColorIntensity(intensity);
  }, []);

  return (
    <ReactECharts
      style={{ top: "0px", height: "45vh" }}
      option={getOptions(
        colorIntensity,
        hue,
        "Color intensity",
        "Hue",
        "scatter"
      )}
    />
  );
};

export default ScatterPlot;
