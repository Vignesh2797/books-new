import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                  fontWeight: 'bold',
                  color: 'white'
              }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%'
      }
  },
    series: [{
      name: 'Percent',
      innerSize: '50%',
      data: [
        { name: 'Romance', y: this.sharedService.romance },
        { name: 'Horror', y: this.sharedService.horror },
        { name: 'Thriller', y: this.sharedService.thriller },
        { name: 'Fantasy', y: this.sharedService.fantasy },
        { name: 'Drama', y: this.sharedService.drama },
        { name: 'Sci-Fi', y: this.sharedService.scifi }
      ]
    }]

  }
  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    this.bookPie();
  }

  bookPie() {
    Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, color],
            [1, Highcharts.color(color).brighten(-0.3).get('rgb')]
          ]
        };
      })
    });
    Highcharts.chart('bookChart', this.options);
  }

}
