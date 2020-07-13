import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';

import { Dog } from '../models/dog';


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent implements OnInit {

  constructor(private dogService: DogService) { }
  dog: any = {};
  dogs: Dog[];
  displayBasic: boolean;
  selectedDog: Dog;
  cols: any[];
  newdog: boolean;
  displayDialog: boolean;
  ngOnInit(): void {
    this.getDog();
    this.displayBasic = false;
    this.cols = [
      { field: 'name', header: 'name' },
      { field: 'years', header: 'Years' },
      { field: 'variety', header: 'variety' },
    ];
  }
  // 查詢
  getDog(): void {
    this.dogService.getDogs().subscribe(
      (data: { data: Dog[] }) => {
        console.log(data.data);
        this.dogs = data.data;
      }, err => {
        console.error(err);
      }
    );
  }
  showBasicDialog(): void {
    // this.dog = new Dog();
    console.log(this.dog);
    this.displayBasic = true;
  }
  // 點級的那筆資料
  selectDog(dog: Dog): void {
    this.selectedDog = this.selectedDog === dog ? null : dog;
    console.log(this.selectedDog);
  }
  // 刪除
  deleteDog(): void {
    // this.dogs = this.dogs.filter((d, i) => i !== this.dogs.indexOf(dog));
    // this.selectedDog = null;
    let index = this.dogs.indexOf(this.selectedDog);
    this.dogs = this.dogs.filter((val, i) => i != index);
    this.dog = null;
    this.displayDialog = false;
  }
  // 存檔
  save(): void {
    let dogs = [...this.dogs];
    if (this.newdog) {
      dogs.push(this.dog);
    } else {
      dogs[this.dogs.indexOf(this.selectedDog)] = this.dog;
    }

    this.dogs = dogs;
    this.dog = null;
    this.displayDialog = false;
  }

  ////////////
  // 新增
  showDialogToAdd(): void {
    this.newdog = true;
    this.dog = {};
    this.displayDialog = true;
  }

  // 點集資料
  onRowSelect(event): void {
    this.newdog = false;
    this.dog = this.cloneCar(event.data);
    this.displayDialog = true;
    console.log(this.dog);
  }
  cloneCar(d: Dog) {
    let dog = {};
    for (let prop in d) {
      console.log(prop);
      dog[prop] = d[prop];
    }
    return dog;
  }

}
