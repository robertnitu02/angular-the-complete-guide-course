import { Component } from '@angular/core';
import { ServerData } from "../shared/server.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: ServerData[] = [
    {
      type: 'server',
      name: 'TestServer',
      content: 'Just a test server!'
    },
    {
      type: 'blueprint',
      name: 'TestServer',
      content: 'Just a test blueprint!'
    }
  ];

  onServerCreated(serverData: ServerData) {
    this.servers.push(serverData);
  }

  onBlueprintCreated(serverData: ServerData) {
    this.servers.push(serverData);
  }
}
