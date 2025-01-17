import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

type State = {
  price: number[];
  date: string[];
};

function Chart() {
  const [state, setState] = useState<State>({
    price: [],
    date: [],
  });

  useEffect(() => {
    const fetchHashData = async () => {
      try {
        const response = await axios.get(
          "https://hash-miner-backend.vercel.app/api/auth/get-prices?period=3m"
        );
        const date = response.data.prices.map(
          (item: { date: string }) => item.date
        );
        const price = response.data.prices.map(
          (item: { price: number }) => item.price
        );
        setState((prev) => ({ ...prev, price, date }));
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchHashData();
  }, []);

  useEffect(() => {
    console.log({ state });
  }, [state]);
  const option = {
    xAxis: {
      type: "category",
      data: state.date,
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true,
      },
      splitLine: {
        show: false,
      },
    },
    grid: {
      top: "5%",
      bottom: "15%",
    },
    series: [
      {
        data: state.price,
        type: "line",
        itemStyle: {
          color: "limegreen",
        },
        lineStyle: {
          color: "limegreen",
        },
        symbol: "none",
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
}

export default Chart;
