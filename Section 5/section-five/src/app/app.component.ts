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

  changeFirstElement() {
    if (this.servers.length === 0) return;
    this.servers[0].name = 'Changed!';
  }

  destroyFirstElement() {
    if (this.servers.length === 0) return;
    this.servers.splice(0, 1);
  }
}
