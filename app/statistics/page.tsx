"use client";
import Link from "next/link";
import Chart from "react-google-charts";

export default function Statistics() {
  const data = [
    ["Data", "Ilość odwiedzin"],
    ["01-03-2024", 150],
    ["02-03-2024", 200],
    ["03-03-2024", 180],
    ["04-03-2024", 250],
    ["05-03-2024", 300],
    ["06-03-2024", 220],
    ["07-03-2024", 180],
  ];
  const data2 = [
    ["Data", "Ilość dodania do ulubionych", "Ilość kliknięć w KONTAKT"],
    ["01-03-2024", 100, 20],
    ["02-03-2024", 100, 25],
    ["03-03-2024", 100, 18],
    ["04-03-2024", 150, 30],
    ["05-03-2024", 200, 22],
    ["06-03-2024", 220, 28],
    ["07-03-2024", 180, 15],
  ];

  return (
    <>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Ładuję wykres...</div>}
        data={data}
        options={{
          title: "Ilość odwiedzin na wizytowki w ciągu ostatnich 7 dni",
          hAxis: {
            title: "Data",
          },
          vAxis: {
            title: "Ilość odwiedzin",
          },
        }}
      />
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Ładuję wykres...</div>}
        data={data2}
        options={{
          title:
            "Ilość dodania do ulubionych i kliknięć w KONTAKT w ciągu ostatnich 7 dni",
          hAxis: {
            title: "Data",
          },
          vAxis: {
            title: "Ilość",
          },
          series: {
            0: { targetAxisIndex: 0 },
            1: { targetAxisIndex: 1 },
          },
          axes: {
            y: {
              0: { label: "Ilość dodania do ulubionych" },
              1: { label: "Ilość kliknięć w KONTAKT" },
            },
          },
        }}
      />
    </>
  );
}
