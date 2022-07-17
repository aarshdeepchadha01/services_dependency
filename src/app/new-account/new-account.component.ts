import { Component} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent {
  
  constructor(private loggingService: LoggingService, 
    private accountsService: AccountsService) {
      this.accountsService.statusUpdated
      .subscribe(
        (status:string) => alert('New Status: ' + status)
       );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
   
    this.accountsService.addAccount(accountName, accountStatus);
   // this.loggingService.logStatusChange(accountStatus); //this is how to use service in angular , make a constructor initialize this and make a provider and give the service name in it and then call the constructor.
    
    //console.log('A server status changed, new status: ' + accountStatus);



  }
}
