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
    selector: 'newForm',
    imports: [FormsModule],
    templateUrl: './newForm.html',
    styleUrl: './newForm.css'
})
export class NewForm {
    name = signal<string>("");
    description = signal<string>("");

    constructor(private router: Router, private http: HttpClient) {}

    new() {
        const headers = new HttpHeaders().set("Content-Type", "application/json");

        this.http.post(`/api/todo`,
            {
              description: this.description(),
              name: this.name()
            },
            {headers}
        ).subscribe(() => {
            this.router.navigateByUrl("/")
        });
    }
}
