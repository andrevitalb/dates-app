import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"
import { environment } from "../../../environments/environment"

@Component({
	selector: "app-test-error",
	templateUrl: "./test-error.component.html",
	styleUrls: ["./test-error.component.scss"],
})
export class TestErrorComponent implements OnInit {
	baseUrl = environment.apiUrl
	validationErrors: string[] = []

	constructor(private http: HttpClient) {}

	ngOnInit(): void {}

	get400ValidationError(): void {
		this.http.post(`${this.baseUrl}account/register`, {}).subscribe({
			next: (response) => console.log(response),
			error: (error) => {
				console.error(error)
				this.validationErrors = error
			},
		})
	}

	get400Error(): void {
		this.http.get(`${this.baseUrl}buggy/bad-request`).subscribe({
			next: (response) => console.log(response),
			error: (error) => console.error(error),
		})
	}

	get401Error(): void {
		this.http.get(`${this.baseUrl}buggy/auth`).subscribe({
			next: (response) => console.log(response),
			error: (error) => console.error(error),
		})
	}

	get404Error(): void {
		this.http.get(`${this.baseUrl}buggy/not-found`).subscribe({
			next: (response) => console.log(response),
			error: (error) => console.error(error),
		})
	}

	get500Error(): void {
		this.http.get(`${this.baseUrl}buggy/server-error`).subscribe({
			next: (response) => console.log(response),
			error: (error) => console.log(error),
		})
	}
}
