import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {



  constructor(private readonly authService: AuthServiceService) {
  }

  ngOnInit(): void {
  }

  public setAnyAuth():any {
    this.authService.changeAuth(false)
  }

}
