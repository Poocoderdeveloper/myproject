import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentdemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentdemo.component.html',
  styleUrl: './studentdemo.component.css'
})
export class StudentdemoComponent {

  stud = [
    
    { 
      id: 1, 
      name: "ashwini",  
      Grade: 32 , 
      Fees:1000

     }
    ,
    { id: 2, name: "Manjiri", Grade: 32, Fees:2000 },
    { id: 3, name: 'Manasi', Grade: 32 ,Fees:3000},
    { id: 4, name: 'Devandra', Grade: 28 ,Fees:4000},
    { id: 5, name: 'rajasi', Grade: 25 ,Fees: 5000}
    
    
  ];


  
  getFeesClass(Fees: number): string {
    return Fees >= 4000 ? 'Fees-primary' : 'Fees-danger';
}
}