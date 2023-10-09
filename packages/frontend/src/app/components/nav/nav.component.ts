import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { IUser } from "models/user"
import { Observable, of } from "rxjs"
import { AccountService } from "services/account.service"

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
	model: any = {}
	currentUser$: Observable<IUser | null> = of(null)

	constructor(
		private accountService: AccountService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.currentUser$ = this.accountService.currentUser$
	}

	login(): void {
		this.accountService.login(this.model).subscribe({
			next: () => this.router.navigateByUrl("/members"),
			error: (error) => {
				console.log(error)
			},
		})
	}

	logout(): void {
		this.accountService.logout()
		this.router.navigateByUrl("/")
	}
}
