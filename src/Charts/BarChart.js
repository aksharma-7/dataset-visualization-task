import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getOptions } from "../utils/chartUtils";

const BarChart = ({ wineData }) => {
  const [alcohol, setAlcohol] = useState([]);
  const [malicAcid, setMalicAcid] = useState([]);

  useEffect(() => {
    const alcoholArr = [];
    const malicAcidArr = [];
    wineData.map((data) => {
      alcoholArr.push(data["Alcohol"]);
      malicAcidArr.push(data["Malic Acid"]);
    });
    setAlcohol(alcoholArr);
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
