import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "../services/logging.service";
import { AccountsService } from "../services/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
