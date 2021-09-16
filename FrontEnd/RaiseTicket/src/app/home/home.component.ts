import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName?:string;
  constructor(public activateRoute:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userName=data.user)
  }
}
