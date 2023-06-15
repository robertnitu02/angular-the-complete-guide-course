import { Component, EventEmitter, Output } from '@angular/core';
import { ServerData } from "../../shared/server.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('onServerCreated') serverCreated = new EventEmitter<ServerData>;
  @Output('onBlueprintCreated') blueprintCreated = new EventEmitter<ServerData>;

  serverName = '';
  serverContent = '';

  createServer() {
    this.serverCreated.emit({
      type: 'server',
      name: this.serverName,
      content: this.serverContent
    });
    this.resetValues();
  }

  createBlueprint() {
    this.blueprintCreated.emit({
      type: 'blueprint',
      name: this.serverName,
      content: this.serverContent
    });
    this.resetValues();
  }

  resetValues() {
    this.serverName = '';
    this.serverContent = '';
  }
}
