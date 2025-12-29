import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-styledemo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './styledemo.component.html',
  styleUrl: './styledemo.component.css'
})
export class StyledemoComponent {

  city = [
    { id: 1, cityname: 'satara', cityTemp: 32, min: 25, max: 40 },
    { id: 2, cityname: 'Delhi', cityTemp: 28, min: 24, max: 45 },
    { id: 3, cityname: 'Bangalore', cityTemp: 25, min: 22, max: 34 }
  ];

  getColor(min: number): string {
    if (min < 25) {
      return 'blue';
    } 
    else if (min >= 25 && min < 30) {
      return 'orange';
    } 
    else if (min >= 30 && min < 35) {
      return 'red';
    } 
    else {
      return 'black';
    }
  }
}
