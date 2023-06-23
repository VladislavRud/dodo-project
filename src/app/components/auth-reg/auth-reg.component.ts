import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-reg',
  templateUrl: './auth-reg.component.html',
  styleUrls: ['./auth-reg.component.scss']
})
export class AuthRegComponent implements OnInit {

  authForm: FormGroup = new FormGroup<any>({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhoneNumber: new FormArray([new FormControl('', [Validators.required, Validators.pattern("[0-9+]{12}")])]),
    userPassword: new FormControl('', Validators.pattern("[0-9]{10}")),
  })


  constructor() {
  }

  ngOnInit(): void {
  }

  getFormsControls(): FormArray {
    return this.authForm?.controls['userPhoneNumber'] as FormArray;
  }

  addPhone() {
    (<FormArray>this.authForm?.controls["userPhoneNumber"]).push(new FormControl("+7", Validators.required));
  }

  submit(authForm: any) {
    let arr = Object.entries(this.authForm.controls)
    let donArray: any[] = []
    arr.forEach((a:any) => {
      console.log(a[1].value)
      if(Array.isArray(a[1].value) && (typeof a[1].value) !== "string") {
        donArray.push(a[1].value)
      } else {
        donArray.push(a[1].value?.trim())
      }
    })
    return donArray
  }

}
