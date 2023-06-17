import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ServerData } from "../../shared/server.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('onServerCreated') serverCreated = new EventEmitter<ServerData>;
  @Output('onBlueprintCreated') blueprintCreated = new EventEmitter<ServerData>;

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // serverName = '';
  // serverContent = '';

  createServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      type: 'server',
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
    // this.resetValues();
  }

  createBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      type: 'blueprint',
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
    // this.resetValues();
  }

  // resetValues() {
  //   this.serverName = '';
  //   this.serverContent = '';
  // }
}
