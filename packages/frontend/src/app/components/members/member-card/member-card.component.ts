import { Component, Input, OnInit } from "@angular/core"
import { IMember } from "interfaces/member"

@Component({
	selector: "app-member-card",
	templateUrl: "./member-card.component.html",
	styleUrls: ["./member-card.component.scss"],
})
export class MemberCardComponent implements OnInit {
	@Input() member: IMember | undefined

	constructor() {}

	ngOnInit(): void {}
}
