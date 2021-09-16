import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {

  lockedUsers: User[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  unlockUser(user: User) {
    console.log("user", user);
  }

}
