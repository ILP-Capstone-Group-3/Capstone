import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  showProgressBar = true;
  employeeId:number = this.route.snapshot.params["id"];

  constructor(private employeeService:EmployeeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.showProgressBar = false;
  }

  // Function for submit button
  changePassword(profileRef:NgForm): void {
    let profileForm = profileRef.value;
    this.showProgressBar = true;

    // Grab employee data from database
    this.employeeService.getEmployeeFromId(this.employeeId).subscribe(data=> {
      // Test if the current password matches
      if (profileForm.currentpassword == data.password) {
        // Test if the two new password match
        if (profileForm.newpassword == profileForm.renewpassword) {
          // Change the password
          let newEmployee = data;
          newEmployee.password = profileForm.newpassword;

          // Update the password in the database
          this.employeeService.updateEmployee(this.employeeId, newEmployee).subscribe(res=> {
            alert("Password updated!");
            console.log(res);
          },
          err=> {
            console.log(err);
          })
        }
        // New password mismatch
        else {
          alert("ERROR: The passwords don't match.");
        }
      }
      // Wrong current password inputted
      else {
        alert("ERROR: Incorrect password.");
      }
    },
    error=> {
      console.log(error);
    });

    this.showProgressBar = false;
    profileRef.resetForm();
  }

}
