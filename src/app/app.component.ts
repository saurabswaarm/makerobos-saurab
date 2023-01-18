import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data ?? this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.data = data;
    });
  }

  makePostRequest() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { title: 'Time', body: '3-1-2020' };
    this.http.post('https://jsonplaceholder.typicode.com/posts', body, { headers }).subscribe(response => {
      console.log(response);
      this.data.push(response);
    });
  }
}