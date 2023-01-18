import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  data: any;
  date: Date = new Date()

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data ?? this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.data = data;
    });
  }

  makePostRequest() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { title: this.date.toLocaleTimeString(), body: this.date.toLocaleDateString() };
    this.http.post('https://jsonplaceholder.typicode.com/posts', body, { headers }).subscribe(response => {
      console.log(response);
      this.data.push(response);
    });
  }
}