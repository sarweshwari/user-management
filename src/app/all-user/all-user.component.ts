import { Component } from '@angular/core';
import { ConsumeApiService } from '../service/consume-api.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {
   
  data: any;
   constructor(private consumeApiService: ConsumeApiService) { 
    consumeApiService.onGetAllUsers().subscribe((response: any) => {
      this.data = response.data;
      console.log(response);
    })

   }
   
    
   
}

