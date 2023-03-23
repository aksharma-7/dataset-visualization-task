import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getAverage, getOptions } from "../utils/chartUtils";

const BarChart = ({ wineData }) => {
  const [alcohol, setAlcohol] = useState([]);
  const [malicAcid, setMalicAcid] = useState([]);

  useEffect(() => {
    const alcoholArr = [];
    const malicAcidArr = getAverage(wineData);
    wineData.map((data) => {
      alcoholArr.push(data["Alcohol"]);
    });
    setAlcohol([...new Set(alcoholArr)]);
    setMalicAcid(malicAcidArr);
  }, []);

  return (
    <ReactECharts
      style={{ height: "45vh", marginTop: "40px" }}
      option={getOptions(alcohol, malicAcid, "Alcohol", "Malic Acid", "bar")}
    />
  );
};

export default BarChart;
