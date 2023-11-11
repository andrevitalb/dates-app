import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { IMember } from "interfaces/member"
import { environment } from "../../environments/environment"

@Injectable({ providedIn: "root" })
export class MembersService {
	baseUrl = environment.apiUrl
	constructor(private http: HttpClient) {}

	getMembers() {
		return this.http.get<IMember[]>(`${this.baseUrl}users`)
	}

	getMember(username: string) {
		return this.http.get<IMember>(`${this.baseUrl}users/${username}`)
	}
}
