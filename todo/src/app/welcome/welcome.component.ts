import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';
import { HttpErrorResponse } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromService: string = '';
  constructor(private route: ActivatedRoute, public dataservice: WelcomedataService) {}
  username='';
  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
   console.log(this.dataservice.executehelloworldcontrollerwithPathvariable(this.name).subscribe(
    response=>this.handleSuccessfulResponse(response),
    error=>this.handleerrorResponce(error)
    )
   );
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService=response.string;
    console.log(response);
    console.log(response.string); // Adjust accordingly based on your API response structure
  }
  handleerrorResponce(error:any){
    console.log(error);
    console.log(error.error.message);
    this.welcomeMessageFromService=error.error.message
  }
}
    