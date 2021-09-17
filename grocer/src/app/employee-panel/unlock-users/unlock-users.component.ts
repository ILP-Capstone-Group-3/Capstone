import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { UnlockUsersService } from '../services/unlock-users.service';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {

  lockedUsers: any[] = [
    {
      _id: "ubdih189he802jei",
      userName: "Barney Stinson",
      email: "max@mail.com",
      password: "1234",
      firstName: "Barney",
      lastName: "stinson",
      paymentMethods: 10,
      numAttempts: 5,
      date: new Date(),
      phoneNumber: 8391200101,
      addresses: [{
        street: "10th street",
        Apt: "baker street",
        city: "new york",
        state: "Texas",
        zipcode: 210012
      }]
    },
    {
      _id: "ubdih189he802jei",
      userName: "Ted mosby",
      email: "ted@mail.com",
      password: "1234",
      firstName: "Ted",
      lastName: "Mosby",
      paymentMethods: 10,
      numAttempts: 5,
      date: new Date(),
      phoneNumber: 8391200101,
      addresses: [{
        street: "10th street",
        Apt: "baker street",
        city: "new york",
        state: "Texas",
        zipcode: 210012
      }]
    }
  ];

  showProgressBar = true;

  constructor(private unlockUserService: UnlockUsersService) { }

  ngOnInit(): void {
    this.unlockUserService.getLockedUsers().subscribe((usersResponse: any[]) => {
      console.log("locked users", usersResponse);
      this.showProgressBar = false;
      this.lockedUsers = usersResponse?.filter((user) => user.numAttempts > 0);
    })
  }

  unlockUser(user: any) {
    console.log("user", user);
    this.showProgressBar = true;
    this.unlockUserService.unlockUser(user.userName).subscribe((response) => {
      this.showProgressBar = false;
      if(response) {
        this.unlockUserService.getLockedUsers().subscribe((usersResponse: any[]) => {
          console.log("locked users", usersResponse);
          this.lockedUsers = usersResponse?.filter((user) => user.numAttempts > 0);
        });
      }
    });
  }

}
