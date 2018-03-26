import { Component, OnInit } from '@angular/core';
import { Route , Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: Http, private _router: Router) { }

  ngOnInit() {
  }

}
