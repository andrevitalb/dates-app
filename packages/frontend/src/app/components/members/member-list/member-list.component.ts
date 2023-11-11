import { Component, OnInit } from "@angular/core"
import { IMember } from "interfaces/member"
import { MembersService } from "services/members.service"

@Component({
	selector: "app-member-list",
	templateUrl: "./member-list.component.html",
	styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent implements OnInit {
	members: IMember[] = []

	constructor(private membersService: MembersService) {
		this.loadMembers()
	}

	loadMembers() {
		this.membersService.getMembers().subscribe({
			next: (members) => (this.members = members),
		})
	}

	ngOnInit(): void {}
}
