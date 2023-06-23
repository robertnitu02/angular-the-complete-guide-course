import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from "@angular/router";

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.server = data['server'];
      });

    // const serverId = parseInt(this.route.snapshot.params['id']);
    // console.log(serverId);
    // this.server = this.serversService.getServer(serverId);
    //
    // this.route.params
    //   .subscribe((param: Params) => {
    //     const serverId = parseInt(param['id']);
    //     this.server = this.serversService.getServer(serverId);
    //   });
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit'],
    //   {queryParams: {allowEdit: '1'}, fragment: 'loading'})
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); // or 'merge'
  }
}
