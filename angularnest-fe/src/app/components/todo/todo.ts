import { Component, input, signal } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'todo',
  imports: [RouterLink],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  name = input<string>();
  description = input<string>();
  done = input<boolean>();
  id = input<number>();
  isClicked = false;
}
