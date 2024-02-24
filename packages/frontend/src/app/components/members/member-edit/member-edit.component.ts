import { Component, HostListener, OnInit, ViewChild } from "@angular/core"
import { NgForm } from "@angular/forms"
import { IMember } from "models/member"
import { IUser } from "models/user"
import { ToastrService } from "ngx-toastr"
import { take } from "rxjs"
import { AccountService } from "services/account.service"
import { MembersService } from "services/members.service"

@Component({
	selector: "app-member-edit",
	templateUrl: "./member-edit.component.html",
	styleUrls: ["./member-edit.component.scss"],
})
export class MemberEditComponent implements OnInit {
	@ViewChild("editForm") editForm: NgForm | undefined
	@HostListener("window:beforeunload", ["$event"]) unloadNotification(
		$event: any,
	) {
		if (this.editForm?.dirty) {
			$event.returnValue = true
		}
	}
	member: IMember | undefined
	user: IUser | null = null

	constructor(
		private accountService: AccountService,
		private membersService: MembersService,
		private toastr: ToastrService,
	) {
		this.accountService.currentUser$.pipe(take(1)).subscribe({
			next: (user) => (this.user = user),
		})
	}

	ngOnInit(): void {
		this.loadMember()
	}

	loadMember(): void {
		if (!this.user) return

		this.membersService.getMember(this.user.username).subscribe({
			next: (member) => (this.member = member),
		})
	}

	updateMember() {
		this.membersService.updateMember(this.editForm?.value).subscribe({
			next: (_) => {
				this.toastr.success("Se ha actualizado tu perfil")
				this.editForm?.reset(this.member)
			},
		})
	}
}
