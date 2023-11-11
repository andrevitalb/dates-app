import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { IUser } from "models/user"
import { BehaviorSubject, map } from "rxjs"
import { environment } from "../../environments/environment"

@Injectable({ providedIn: "root" })
export class AccountService {
	baseUrl = environment.apiUrl
	private currentUserSource = new BehaviorSubject<IUser | null>(null)
	currentUser$ = this.currentUserSource.asObservable()

	constructor(private http: HttpClient) {}

	login(model: IUser) {
		return this.http.post<IUser>(`${this.baseUrl}account/login`, model).pipe(
			map((response: IUser) => {
				const user = response
				if (user) {
					localStorage.setItem("user", JSON.stringify(user))
					this.currentUserSource.next(user)
				}
			}),
		)
	}

	register(model: IUser) {
		return this.http.post<IUser>(`${this.baseUrl}account/register`, model).pipe(
			map((user) => {
				if (user) {
					localStorage.setItem("user", JSON.stringify(user))
					this.currentUserSource.next(user)
				}
			}),
		)
	}

	setCurrentUser(user: IUser) {
		this.currentUserSource.next(user)
	}

	logout() {
		localStorage.removeItem("user")
		this.currentUserSource.next(null)
	}
}
