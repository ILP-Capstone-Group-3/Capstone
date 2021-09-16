import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  enableSaveButton =  true;

  userFormGroup = new FormGroup({
    userName: new FormControl({value: 'Max', disabled: true}),
    userId: new FormControl({value: 'emp-12j3kd', disabled: true}),
    password: new FormControl({value: '123456aA', disabled: true})
  });

  constructor() { }

  ngOnInit(): void {
  }

  editPassword() {
    this.userFormGroup.get('password')?.enable();
    this.enableSaveButton = false;
  }

  savePassword() {
    this.userFormGroup.get('password')?.disable();
    this.enableSaveButton =  true;
  }

}
