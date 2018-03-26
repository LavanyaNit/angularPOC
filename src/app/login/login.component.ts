import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Route , Router} from '@angular/router';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  /*onSubmit = function (form) {
    console.log(form);
  };*/
  username: string;
  password: string;
  userData1: any;
  errorFlag: Boolean = false;
  class: any;
  voted: string;
  /*@Input() navText: string = 'Logout';*/
  @Output() navText: string;
   constructor(private http: Http, private _router: Router) {
  }
ngOnInit() {

  }

  onLogin(form: any) {
    const _self = this;
    const userData = {'username': _self.username, 'password': _self.password };
    this.http.get('http://localhost:4200/assets/text.json')
      .map(this.extractData)
      .subscribe(userData1 => {
        this.userData1 = userData1;
        console.log(userData1);
        let name1: string;
        let flyingClub1: number;
        for ( const o of this.userData1){
          console.log(o.username);
          if ((o.username === userData.username) && (o.password === userData.password)) {
            name1 = o.name;
            flyingClub1 = o.flyingClub;
            console.log('in');
          this.navText = 'Logout';
          }
        }
        console.log(name1 + 'item');
        if (name1 !== undefined) {
          _self._router.navigate(['/details', {name: name1}]);
        } else {
          /*alert('You have entered a wrong data');*/
          this.errorFlag = true;
          this.navText = 'Login';
        }
      });

  }
  private extractData(res: Response) {
    const body = res.json();
    return body.user || {};
  }


}
