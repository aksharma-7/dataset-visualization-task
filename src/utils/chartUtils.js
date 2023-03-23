export const getOptions = (
  xAxisData,
  yAxisData,
  xAxisName,
  yAxisName,
  chartType
) => {
  return {
    grid: { top: 40, right: 150, bottom: 34, left: 90 },
    xAxis: {
      type: "category",
      data: xAxisData,
      name: xAxisName,
      nameLocation: "end",
      nameTextStyle: {
        fontWeight: "bold",
        fontSize: 16,
      },
    },
    yAxis: {
      type: "value",
      name: yAxisName,
      nameLocation: "end",
      nameTextStyle: {
        fontWeight: "bold",
        fontSize: 16,
      },
    },
    series: [
      {
        data: yAxisData,
        type: chartType,
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
};

export const getAverage = (data) => {
  const malicAcid1 = data
    .filter((obj) => obj.Alcohol === 1)
    .map((obj) => obj["Malic Acid"]);
  const malicAcid2 = data
    .filter((obj) => obj.Alcohol === 2)
    .map((obj) => obj["Malic Acid"]);
  const malicAcid3 = data
    .filter((obj) => obj.Alcohol === 3)
    .map((obj) => obj["Malic Acid"]);
  const avg1 =
    malicAcid1.reduce((acc, val) => acc + val, 0) / malicAcid1.length;
  const avg2 =
    malicAcid2.reduce((acc, val) => acc + val, 0) / malicAcid2.length;
  const avg3 =
    malicAcid3.reduce((acc, val) => acc + val, 0) / malicAcid3.length;
  return [avg1, avg2, avg3];
};
