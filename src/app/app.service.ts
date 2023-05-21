import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./student.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // variables :
  private _student: Student;
  private _students: Array<Student>
  private _url = "http://localhost:3000/students"

  // constructor injected with httpClient
  constructor(private _http:HttpClient) { }

  public findAll():Observable<Array<Student>>{
    return this._http.get<Array<Student>>(this._url);
  }

  // Getters and setters :
  get student(): Student {
    return this._student;
  }

  set student(value: Student) {
    this._student = value;
  }

  get students(): Array<Student> {
    return this._students;
  }

  set students(value: Array<Student>) {
    this._students = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

}
