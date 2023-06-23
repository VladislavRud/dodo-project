import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public auth$ = new Subject<boolean>()

  constructor() { }

  public changeAuth (auth: boolean) {
    this.auth$.next(auth)
  }


}
