import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

    @Output() addedStudent:EventEmitter<string[]>= new EventEmitter;
    students:string[] = [];

    studentName = "";

    addName(){

      this.students.push(this.studentName)
      this.studentName  = "";
      console.log(this.students);
      this.addedStudent.emit(this.students);
    }
}
