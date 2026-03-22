import { Component, signal } from '@angular/core';
import { HttpClient, HttpHeaders, httpResource } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

interface TodoObject {
  id: number;
  name: string;
  description: string;
  done: boolean;
}

@Component({
  selector: 'editForm',
  imports: [FormsModule],
  templateUrl: './editForm.html',
  styleUrl: './editForm.css'
})
export class EditForm {
  id: number = 0;
  name = signal<string>("");
  description = signal<string>("");
  done = signal<boolean>(false);

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<TodoObject>(`/api/todo/${this.id}`).subscribe(todo => {
      this.name.set(todo.name);
      this.description.set(todo.description);
      this.done.set(todo.done);
    });
  }

  update() {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    this.http.patch(`/api/todo/${this.id}`,
      {
        done: this.done(),
        description: this.description(),
        name: this.name()
      },
      {headers}
    ).subscribe(() => {
      this.router.navigateByUrl("/")
    });
  }

  deleteTodo() {
    this.http.delete(`/api/todo/${this.id}`).subscribe(() => {
      this.router.navigateByUrl("/")
    });
  }
}
