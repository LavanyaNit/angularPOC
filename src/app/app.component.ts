import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {NavComponent} from './nav/nav.component';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  navMessage: string = 'Login';
    constructor() {  }


}
