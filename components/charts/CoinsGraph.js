import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ["12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov"],
  datasets: [
    {
      label: "Price per unit",
      data: [1110, 902, 420, 780, 1004, 1045],
      fill: true,
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)"
    },
  ]
};

export default function CoinsGraph() {
  return (
    <div className="lg:w-4/12 lg:mx-10">
      <div className="dark-glassmorph lg:mx-5 my-5 lg:my-0 rounded-lg">
          <p className="text-center font-Bebas text-4xl py-2">Updates!</p>
          <div className="overflow-y-scroll lg:h-[220px] purchases">
            <p className="border-y-[1px] border-gray-400 text-center py-2">One more game added!</p>
            <p className="border-b-[1px] border-gray-400 text-center py-2">The first Spystop pass is releasing on 15th Nov 2022</p>
            <p className="border-b-[1px] border-gray-400 text-center py-2">Night Market is coming live again on 30th Nov 2022</p>
            <p className="border-b-[1px] border-gray-400 text-center py-2">10 Players completed!</p>
            <p className="border-b-[1px] border-gray-400 text-center py-2">Every game is free to play!</p>
          </div>
      </div>  
    </div>
  );
}