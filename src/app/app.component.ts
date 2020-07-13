import { Component } from '@angular/core';
import { Dog } from './models/dog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dog';
  dogs: any[];


}
