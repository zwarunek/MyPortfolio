import { Component, OnInit } from '@angular/core';
import { WebRequestService} from "../../web-request.service";
import {max} from "rxjs/operators";

@Component({
  selector: 'app-timemachine',
  templateUrl: './timemachine.component.html',
  styleUrls: ['./timemachine.component.css']
})
export class TimemachineComponent implements OnInit {

  constructor(private api: WebRequestService) { }

  chartInfo: any;
  options: any;
  pluginTime: string[] = [];
  pluginData: number[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.getPluginStats();
    this.chartInfo = {
      labels: this.pluginTime,
      datasets: [
        {
          label: 'Servers',
          data: this.pluginData,
          fill: false,
          borderColor: '#007bff',
          lineTension: 0,
          pointRadius: 2,
          pointHoverRadius: 3
        }
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'Active Servers',
        fontSize: 16
      },
      legend: {
        display: false
      },
      line: {
        lineTension: 0
      }
    };
  }

  getPluginStats(){
    this.loading = true;
    let average = 0;
    let maxData = Math.floor((new Date().getTime() - new Date("10/12/2020").getTime())/(1000 * 3600 * 24)) * 2 * 24;
    this.api.get('https://bstats.org/api/v1/plugins/8860/charts/servers/data/?maxElements=' + maxData).subscribe((result: any[]) => {
      for(let i = 0; i<result.length; i++){
        let date = new Date(result[i][0]);
        average += result[i][1];
        if(i%(maxData/(24*2)) == 0) {
          if(i%((maxData/(24*2))) == 0)
            this.pluginTime.push((date.getMonth()+1) + '/' + date.getDate().toString() + '/' + date.getFullYear())
          else
            this.pluginTime.push('')
          this.pluginData.push(Math.round(average/(maxData/(24*2))))
          average = 0;
        }
      }
      console.log(this.pluginData);
      this.loading = false;
    })
  }

}

