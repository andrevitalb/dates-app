import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	registerMode = false
	users: any

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getUsers()
	}

	registerToggle(): void {
		this.registerMode = !this.registerMode
	}

	getUsers() {
		this.http.get("https://localhost:5001/api/users").subscribe({
			next: (response) => (this.users = response),
			error: (err) => console.error(err),
		})
	}

	cancelRegisterMode(event: boolean): void {
		this.registerMode = event
	}
}
