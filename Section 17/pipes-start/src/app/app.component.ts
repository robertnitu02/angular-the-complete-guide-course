import {Component} from '@angular/core';

export interface ServerData {
  instanceType: string;
  name: string;
  status: string;
  started: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: ServerData[] = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(2023, 6, 30)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2023, 6, 30)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2023, 6, 30)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2023, 6, 30)
    }
  ];
  filterString = '';
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  getStatusClasses(server: ServerData) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'Test Server',
      status: 'stable',
      started: new Date(2017, 1, 15)
    });
  }
}
