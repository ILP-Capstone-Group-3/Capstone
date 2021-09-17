import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RaiseTicketService } from '../raise-ticket.service';


@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  raiseTicketRef = new FormGroup({
    email:new FormControl(),
    password: new FormControl()
  })


  constructor(
    public loginSer:RaiseTicketService,
    public router:Router) { }
    msg?: string;


  ngOnInit(): void {
  }

  checkUser(){
    let login = this.raiseTicketRef.value;
    //console.log(login)
    this.loginSer.raiseTicketLog(login).
    subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["home", login.email])
      }else{
          this.msg = result;
      }
      
     },
    error=>console.log(error))

    this.raiseTicketRef.reset();
  }


}
