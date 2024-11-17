import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Donut({ dataa }) {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "ทั้งหมด",
        colorByPoint: true,
        data: [
          { name: "เช้า", y: 5300 },
          { name: "กลางวัน", y: 3150 },
          { name: "เย็น", y: 2204 },
          { name: "กลางคืน", y: 900 },
        ],
      },
    ],
  });

  useEffect(() => {
    let newData;
    switch (dataa) {
      case "2":
        newData = [
          { name: "เช้า", y: 15000 },
          { name: "กลางวัน", y: 11000 },
          { name: "เย็น", y: 7000 },
          { name: "กลางคืน", y: 2500 },
        ];
        break;
      case "3":
        newData = [
          { name: "เช้า", y: 67000 },
          { name: "กลางวัน", y: 43000 },
          { name: "เย็น", y: 33500 },
          { name: "กลางคืน", y: 10800 },
        ];
        break;
      case "4":
        newData = [
          { name: "เช้า", y: 312000 },
          { name: "กลางวัน", y: 258000 },
          { name: "เย็น", y: 156000 },
          { name: "กลางคืน", y: 83500 },
        ];
        break;
      default:
        newData = [
          { name: "เช้า", y: 5300 },
          { name: "กลางวัน", y: 3150 },
          { name: "เย็น", y: 2204 },
          { name: "กลางคืน", y: 900 },
        ];
        break;
    }

    setChartData({
      series: [
        {
          name: "ทั้งหมด",
          colorByPoint: true,
          data: newData,
        },
      ],
    });
  }, [dataa]);

  const options = {
    chart: {
      type: "pie",
      height: 400,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    tooltip: {
      valueSuffix: " คน",
    },
    plotOptions: {
      pie: {
        size: "70%",
        center: ["50%", "50%"],
      },
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
        ],
      },
    },
    series: chartData.series,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Donut;
