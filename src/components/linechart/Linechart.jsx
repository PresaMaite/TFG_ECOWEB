import { Line } from 'react-chartjs-2';
import Chart, { CategoryScale } from 'chart.js/auto';
Chart.register(CategoryScale);

export const Linechart = () => {
  
    return (
        <Line data={{
            labels: ["2018", "2019", "2020", "2021", "2022"],
            datasets: [
              {
                label: "Crecimiento del uso de Internet",
                data: [3.7, 4.2, 4.7, 4.9, 5.3],
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
              },
            ],
          }}
          options={{
            scales:{
                y:{
                    title: {
                        display: true,
                        text: "Número de usuarios de Internet, en billones"
                    }
                },
                x: {
                    ticks:{
                        maxRotation: 90,
                        minRotation: 90
                    },
                },
            }
          }} />
    );
  };