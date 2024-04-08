import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

    students:string[] = [];

    studentName = "";

    addName(){

      this.students.push(this.studentName)
      this.studentName  = "";
      console.log(this.students);
    }
}
