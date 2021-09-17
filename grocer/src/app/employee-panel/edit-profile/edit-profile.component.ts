import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditProileService } from '../services/edit-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  enableSaveButton =  true;
  showProgressBar = false;

  userFormGroup = new FormGroup({
    userName: new FormControl({value: 'Max', disabled: true}),
    userId: new FormControl({value: 'emp-12j3kd', disabled: true}),
    password: new FormControl({value: '123456aA', disabled: true})
  });

  constructor(
    private editProfileService: EditProileService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  editPassword() {
    this.userFormGroup.get('password')?.enable();
    this.enableSaveButton = false;
  }

  savePassword() {
    this.userFormGroup.get('password')?.disable();
    this.enableSaveButton =  true;
    this.showProgressBar = true;
    this.editProfileService.editProfile(this.userFormGroup.value).subscribe((response) => {
      this.showProgressBar = false;
      if(response) {
        console.log("response", response);
        this.snackbar.open('Password updated successfully', '', {duration: 3000});
      }
    }, (error) => {
      this.showProgressBar = false;
      this.snackbar.open('Error updating Password', '', {duration: 3000});
      console.log("error", error);
    });
  }

}
