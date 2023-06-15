import { Component, Input } from '@angular/core';
import { ServerData } from "../../shared/server.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input('serverData') server: ServerData | undefined = undefined;
}
