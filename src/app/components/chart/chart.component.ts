import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('chartContainer') chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    const chartDom = this.chartContainer.nativeElement;
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['ديسمبر','نوفبر','اكتوبر','سبتمبر','اغسطس','يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
      },
      yAxis: {
        type: 'value',

      },
      series: [
        {
          name: 'Sales',
          type: 'line',
          smooth: true,  
          data: [90,190,80, 150, 250, 180, 230, 200,150,140, 100,230],
           areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(128, 128, 255, 0.8)' }, 
              { offset: 1, color: 'rgba(128, 128, 255, 0.1)' }  
            ]),

          },
          itemStyle: {
            color: '#9463F7',  
          },
          lineStyle: {
            color: '#9463F7',  
          },
        }
      ],
      grid: {
        left: '2%',
        containLabel: true,
      },
    };

    myChart.setOption(option);
  }
}
