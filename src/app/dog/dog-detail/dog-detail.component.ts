import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../../models/dog';
@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  @Input() dog: Dog;
  @Output() deleteDog: EventEmitter<Dog> = new EventEmitter();
  constructor() { }


  ngOnInit(): void {
    console.log(this.dog);
    console.log(this.deleteDog);
  }
  onDleteDog(dog: Dog) {
    this.deleteDog.emit(dog);
  }
}
