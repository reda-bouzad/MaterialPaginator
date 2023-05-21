import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { AppService } from "./app.service";
import { Student } from "./student.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'materialPaginator';
  displayedColumns: string[] = ['id', 'userId', 'name'];
  dataSource: MatTableDataSource<Student>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private appService: AppService) {
    this.dataSource = new MatTableDataSource<Student>();
  }

  ngOnInit(): void {
    this.findAll();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public findAll(): void {
    this.appService.findAll().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  get student(): Student {
    return this.appService.student;
  }

  set student(value: Student) {
    this.appService.student = value;
  }

  get students(): Array<Student> {
    return this.appService.students;
  }

  set students(value: Array<Student>) {
    this.appService.students = value;
  }
}
