import { Component, OnInit } from '@angular/core';
import { BarController, BarElement, CategoryScale, Chart, ChartData, ChartOptions, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { calculateWeeklyAverage } from '../shared/average-data';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div style="display: block; max-width: 600px; margin: auto;">
      <canvas baseChart
        [data]="chartData"
        [options]="chartOptions"
        [type]="chartType">
      </canvas>
    </div>
  `
})
export class TimerChartComponent implements OnInit {
  chartData!: ChartData<'bar', number[], string>;
  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Seconds'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Day of Week'
        }
      }
    }
  };
  chartType: 'bar' = 'bar';

  ngOnInit(): void {
    const avg = calculateWeeklyAverage();
    const order = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    avg.sort((a,b) => order.indexOf(a.day) - order.indexOf(b.day));

    this.chartData = {
      labels: avg.map(d => d.day),
      datasets: [
        {
          label: 'Average seconds per day',
          data: avg.map(d => d.average),
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        }
      ]
    };
  }
}
export { Chart };

