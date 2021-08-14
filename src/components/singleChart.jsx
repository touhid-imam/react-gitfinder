// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const SingleChart = ({ data, chartOption }) => {
  const {
    chartType,
    chartCaption,
    chartShowPercentValues,
    chartDecimals,
    chartPieRadius,
    chartXaxisName,
    chartYaxisName,
    chartEnableSmartLabels,
    chartStartingAngle,
  } = chartOption;
  // Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: chartType ? chartType : "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: chartCaption ? chartCaption : "",
        //Set the x-axis name
        xAxisName: chartXaxisName ? chartXaxisName : "",
        //Set the y-axis name
        yAxisName: chartYaxisName ? chartYaxisName : "",
        yAxisNameFontSize: "10px",
        xAxisNameFontSize: "10px",
        //Set the theme for your chart
        theme: "candy",
        showPercentValues: chartShowPercentValues ? chartShowPercentValues : 0,
        decimals: chartDecimals ? chartDecimals : 0,
        pieRadius: chartPieRadius ? chartPieRadius : "40%",
        enableSmartLabels: chartEnableSmartLabels ? chartEnableSmartLabels : 0,
        startingAngle: chartStartingAngle ? chartStartingAngle : 0,
        useDataPlotColorForLabels: 1,
      },
      // Chart Data
      data,
    },
  };
  return (
    <div className="col-md-6">
      <div className="chart-wrapper chart-bg rounded mt-5 pt-1">
        <ReactFC {...chartConfigs} />
      </div>
    </div>
  );
};

export default SingleChart;
