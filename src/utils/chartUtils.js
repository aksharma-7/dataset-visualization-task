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
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
  };
};
