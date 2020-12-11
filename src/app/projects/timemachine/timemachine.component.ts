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
          borderColor: '#007bff'
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
      }
    };
  }

  getPluginStats(){
    this.loading = true;
    let average = 0;
    let maxData = 2880;
    this.api.get('https://bstats.org/api/v1/plugins/8860/charts/servers/data/?maxElements=' + maxData).subscribe((result: any[]) => {
      for(let i = 0; i<result.length; i++){
        let date = new Date(result[i][0]);
        average += result[i][1];
        if(i%(maxData/30) == 0) {
          if(i%((maxData/30)*2) == 0)
            this.pluginTime.push(date.getMonth() + '/' + date.getDate().toString() + '/' + date.getFullYear())
          else
            this.pluginTime.push('')
          this.pluginData.push(Math.round(average/(maxData/30)))
          average = 0;
        }
      }
      console.log(this.pluginData);
      this.loading = false;
    })
  }

}

