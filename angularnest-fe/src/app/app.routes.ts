import { Routes } from '@angular/router';
import { TodoList } from './components/todoList/todoList';
import { EditForm } from './components/edit/editForm';
import { NewForm } from './components/new/newForm';

export const routes: Routes = [
  {
    path: '',
    component: TodoList,
    title: "Todo List"
  },
  {
    path: 'edit/:id',
    component: EditForm,
    title: "Edit a todo"
  },
  {
    path: 'new',
    component: NewForm,
    title: "New todo"
  }
];
