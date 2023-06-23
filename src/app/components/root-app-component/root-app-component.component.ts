import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-root-app-component',
  templateUrl: './root-app-component.component.html',
  styleUrls: ['./root-app-component.component.scss']
})
export class RootAppComponentComponent implements OnInit {

  auth: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  public changeAuth() {
    if(this.auth === true) {
      this.auth = false
    } else {
      this.auth = true
    }

  }


}
