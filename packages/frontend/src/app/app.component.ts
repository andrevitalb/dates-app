import { Component, OnInit } from "@angular/core"
import { IUser } from "models/user"
import { AccountService } from "./services/account.service"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "Dates App"

	constructor(private accountService: AccountService) {}

	ngOnInit(): void {
		this.setCurrentUser()
	}

	setCurrentUser(): void {
		const userString = localStorage.getItem("user")
		if (!userString) return
		const user: IUser = JSON.parse(userString)
		this.accountService.setCurrentUser(user)
	}
}
