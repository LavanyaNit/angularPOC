import {Component, Injectable, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Http, Response} from '@angular/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

@Injectable()
export class DetailsComponent implements OnInit {
  name: any;
  club: any;
  username: string;
  password: string;
  miles: any;
  userData1: any;
  usrname: any;
  constructor( private activatedRoute: ActivatedRoute, private http: Http, private _router: Router) {
   /* this.activatedRoute.params.subscribe( params =>
        this.name = params['name']
      this.club = params['flyingClub']
    );*/
  }


  ngOnInit() {
    this.activatedRoute.params.forEach((urlParams) => {
      this.name = urlParams['name'];
      /*this.club = urlParams['flyingClub'];*/

    });

    const userData = this.name;
    this.http.get('http://localhost:4200/assets/text.json')
      .map(this.extractData)
      .subscribe(userData1 => {
        this.userData1 = userData1;
        console.log(userData1);
        for ( const o of this.userData1){
          console.log(o.username);
          if (o.name === userData) {
            this.usrname = o.name;
            this.club = o.flyingClub;
            this.miles = o.miles;
            console.log('in');
          }
        }
        console.log(this.username + 'item');
        });

  }
  private extractData(res: Response) {
    const body = res.json();
    return body.user || {};
  }
  @Input()
  set text(text: string){
    this.text = 'Logout';
  }
  get text(){
    return this.text;
  }
}
