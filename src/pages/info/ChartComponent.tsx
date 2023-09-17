import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { averageCalc, colorPick } from './infoFunctions';
import { InitialDataProps } from './infoTypes'

Chart.register(...registerables);

export function LineComponent({ initialData } : InitialDataProps){
    const [lineData, setLineData] = useState({
        labels: ['0'],
        datasets: [{
          data: [0],
          borderWidth: 2,
          backgroundColor: ['rgba(0, 0, 0, 0.5)'],
          borderColor: 'rgba(0, 0, 0, 0.5)',
          pointRadius: 10,
          pointHoverRadius: 7,
        }]
    });

    useEffect(() => {
        if(initialData.FCST_PPLTN !== null){
            setLineData({
                labels: initialData.FCST_PPLTN.map((el) => el.FCST_TIME.split(" ")[1]),
                datasets: [{
                  data: initialData.FCST_PPLTN.map((el) => averageCalc(el.FCST_PPLTN_MAX, el.FCST_PPLTN_MIN)),
                  borderWidth: 2,
                  backgroundColor: initialData.FCST_PPLTN.map((el) => colorPick(el.FCST_CONGEST_LVL)),
                  borderColor: 'rgba(0, 0, 0, 0.5)',
                  pointRadius: 10,
                  pointHoverRadius: 7,
                }]
            });
        }
    }, [initialData]);

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
    };

    return (
        <Line data={lineData} options={options} />
    )
}

export function PieComponent({ initialData } : InitialDataProps){
  const [pieData, setPieData] = useState({
      labels: ['여성 비율', '남성 비율'],
      datasets: [{
        data: [50, 50],
        backgroundColor: ['rgb(240, 151, 151)', 'rgb(130, 140, 221)'],
      }]
  });

  useEffect(() => {
      setPieData({
          labels: ['여성 비율', '남성 비율'],
          datasets: [{
            data: [Number(initialData.FEMALE_PPLTN_RATE), Number(initialData.MALE_PPLTN_RATE)],
            backgroundColor: ['rgb(240, 151, 151)', 'rgb(130, 140, 221)'],
          }]
      });
  }, [initialData]);

  const options = {
      plugins: {
          legend: {
              display: false
          },
      },
  };

  return (
      <Pie data={pieData} options={options} />
  )
} 

export function PieComponent2({ initialData } : InitialDataProps){
  const [pieData2, setPieData2] = useState({
      labels: ['상주 인구 비율', '비상주 인구 비율'],
      datasets: [{
        data: [50, 50],
        backgroundColor: ['rgb(240, 238, 151)', 'rgb(130, 221, 130)'],
      }]
  });
  
  useEffect(() => {
      setPieData2({
          labels: ['상주 인구 비율', '비상주 인구 비율'],
          datasets: [{
            data: [Number(initialData.RESNT_PPLTN_RATE), Number(initialData.NON_RESNT_PPLTN_RATE)],
            backgroundColor: ['rgb(240, 238, 151)', 'rgb(130, 221, 130)'],
          }]
      });
  }, [initialData]);

  const options = {
      plugins: {
          legend: {
              display: false
          },
      },
  };

  return (
    <Pie data={pieData2} options={options} />
  )
}

export function BarComponent({ initialData } : InitialDataProps){
  const [barData, setBarData] = useState({
      labels: ['10세 미만','10대','20대','30대','40대','50대','60대','70대 이상'],
      datasets: [{
        data: [0,0,0,0,0,0,0,0],
        borderWidth: 2,
        backgroundColor: ['rgb(204, 204, 204)'],
        borderColor: 'rgb(170, 170, 170)',
      }]
  });

  useEffect(() => {
      setBarData({
          labels: ['10세 미만','10대','20대','30대','40대','50대','60대','70대 이상'],
          datasets: [{
            data: [Number(initialData.PPLTN_RATE_0),Number(initialData.PPLTN_RATE_10),Number(initialData.PPLTN_RATE_20),Number(initialData.PPLTN_RATE_30),Number(initialData.PPLTN_RATE_40),Number(initialData.PPLTN_RATE_50),Number(initialData.PPLTN_RATE_60),Number(initialData.PPLTN_RATE_70)],
            borderWidth: 2,
            backgroundColor: ['rgb(204, 204, 204)'],
            borderColor: 'rgb(170, 170, 170)',
          }]
      });
  }, [initialData]);

  const options = {
      plugins: {
          legend: {
              display: false
          },
      },
  };

  return (
      <Bar data={barData} options={options} />
  )
}