import { Component, signal } from '@angular/core';
import { Todo } from '../todo/todo';
import { httpResource } from '@angular/common/http';
import { RouterLink } from "@angular/router";

interface TodoObject {
  id: number;
  name: string;
  description: string;
  done: boolean;
}

@Component({
  selector: 'todo-list',
  imports: [Todo, RouterLink],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class TodoList {
  constructor() {}

  todos = httpResource<TodoObject[]>(() => `/api/todo`);
}
