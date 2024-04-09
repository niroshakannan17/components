import { Component } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  studentList:string[] = []

  updatedStudentData(studentArr:string[])
  {
    this.studentList = studentArr;
  }
}
